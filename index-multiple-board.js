var CONTAINER_EL = undefined;
var HEADER_EL = undefined;
const containerClassName = "pg-board-container"
const boardClassName = "pg-board"
var boardCards = [];
var cardsBounding = []
var cards = []
const tempCards = [];
var isDrag = false;
var cardActive = undefined;
var cardActiveIndex = -1;
var boardActiveIndex = -1;
var baseTop = 0;
var cardGap = 0
var onDragStartFn = undefined
var onDragEndFn = undefined
var list = []
var MULTIPLEDATA = undefined;
var boarderStyles = undefined

function createContainer({id, width, height, padding, gap}) {
  CONTAINER_EL = document.getElementById(id);
  if(!CONTAINER_EL) throw new Error(`Element with ${id} is not available!`);
  CONTAINER_EL.classList.add(containerClassName);
  CONTAINER_EL.style.width = width
  CONTAINER_EL.style.height = height
  CONTAINER_EL.style.gap = `${gap}px`
  if(padding) CONTAINER_EL.style.padding = `${padding}px`;
}

function createBoards(multipleData) {
  MULTIPLEDATA = multipleData
  multipleData.forEach((bdata, bIndex) => {
    const board =  createElement('div', `${bdata.id}-board`, boardClassName);
    if(boarderStyles.width) board.style.width = boarderStyles.width
    if(boarderStyles.height) board.style.height = boarderStyles.height
    if(boarderStyles.gap)  board.style.gap = `${boarderStyles.gap}px`
    if(boarderStyles.padding) board.style.padding = `${boarderStyles.padding}px`
    const cards = []
    bdata.data.forEach((cdata, index) => {
      const card = createCard({...cdata, gap: boarderStyles.gap, index})
      board.append(card)
      // card.setAttribute('data-index', `${bIndex}-${index}`)
      cards.push(card)
    })
    CONTAINER_EL.append(board)
    board.setAttribute('data-index', `${bIndex}`)
    boardCards.push({
      id: bdata.id,
      el: board,
      cards: cards
    })
  })
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag)
  if(id) newEl.id = id
  if(className) newEl.classList.add(className);
  return newEl;
}

function createCard({ id, title,  description, index, gap}) {
  const cardEl = createElement('div', `${id}-board-item-container`, 'pg-card');
  const top = index * 106 +((index+1) * gap);
  cardEl.style.top = `${top}px`
  
  const titleEl = createElement('h6', `${id}-title`, 'pg-card-title');
  titleEl.innerHTML = title
    
  const descriptionEl = createElement('p', `${id}-title`, 'pg-board-description');
  descriptionEl.innerHTML = description;

  cardEl.append(titleEl)
  cardEl.append(descriptionEl)
  
  return cardEl
}

function init({id, gap, width, height, boardWidth, boardHeight, boardPadding, boardGap, padding, data, multipleData, onDragStart, onDragEnd}) {
  cardGap = gap
  onDragStartFn = onDragStart
  onDragEndFn = onDragEnd
  list=data
  createContainer({id, width, height, padding, gap})
  boarderStyles = {
    height: boardHeight,
    gap: boardGap, 
    padding: boardPadding,
    width: boardWidth
  }
  createBoards(multipleData)
  setBouding()
  initFunc()
}
function onCardChoose(cardElement, boardIndex, cardIndex){
  cardActiveIndex = cardIndex
  boardActiveIndex = boardIndex
  if(onDragStartFn) onDragStartFn(boardIndex, cardIndex)
  cardActive = cardElement
}

function initFunc() {
  var lastY = 0;
  var lastX = 0;
  boardCards.forEach((bc, bci) => {
    bc.cards.forEach((ce, ci) => {
      ce.addEventListener('mousedown', () => {
        const [boardIndex, cardIndex] = ce.dataset.index.split("-")
        boardActiveIndex = parseInt(boardIndex)
        cardActiveIndex = parseInt(cardIndex)

        // boardActiveIndex = bci
        // cardActiveIndex = ci
        if(onDragStartFn) onDragStartFn(bci, ci)
        cardActive = ce
      })
    })
  })
  
  CONTAINER_EL.addEventListener('mousedown', (e) => {
      isDrag=true
      const top = e.clientY - baseTop
      lastY = top
      lastX =  e.clientX
    if(cardActive) cardActive.classList.add("pg-card-active")
    setTimeout(() => {
      if(cardActive) cardActive.classList.add("pg-card-active")
    }, 10)
  })
  
  CONTAINER_EL.addEventListener('mousemove', (e) => {
    if(!cardActive) return;
    const top = e.clientY - baseTop
    if(isDrag && cardActive) {
      if(lastY == 0) {
        cards.forEach(c => {
          c.classList.add("no-copy")
        })
      }
      const Y = parseInt(cardActive.style.top.replace("px", "")) + top - lastY 
      const X = e.clientX - lastX;
      cardActive.style.top = `${Y}px`
      cardActive.style.left = `${e.clientX-boardCards[boardActiveIndex].rect.x- boardCards[boardActiveIndex].rect.width/2}px`
      lastX = e.clientX
      lastY = top
    }
  })



  CONTAINER_EL.addEventListener('mouseup', (e) => {
    isDrag = false
    if(cardActive) {
      const { x: prevX, y: prevY } = boardCards[boardActiveIndex].cardsRect[cardActiveIndex];
        const { x, y, width, height } = cardActive.getBoundingClientRect();
        const midX = x + (width/2)
        const midY = x + (height/2)
        const endY = x + height
        const endX = x + width
        let toBoardIndex = boardActiveIndex;
        let toCardIndex = cardActiveIndex;
        for (let bIndex = 0; bIndex < boardCards.length; bIndex++) {
          const board = boardCards[bIndex];
            if(x >= board.rect.x && x <= board.rect.x+board.rect.width) {
              toBoardIndex = bIndex;
              for (let cIndex = 0; cIndex < board.cardsRect.length; cIndex++) {
                const cRect = board.cardsRect[cIndex];
                if(y > cRect.y) {
                  toCardIndex = cIndex;
                }
              }
              break;
            }
        }
        console.log({toBoardIndex, boardActiveIndex})
        console.log({toCardIndex, cardActiveIndex})
        // card is put outside board
        if(toBoardIndex == boardActiveIndex) {
          cardActive.style.top = `${boardCards[boardActiveIndex].cardsRect[cardActiveIndex].y-boarderStyles.gap/2}px`
          cardActive.style.left = `${boardCards[boardActiveIndex].cardsRect[cardActiveIndex].x-boardCards[0].rect.x}px`
          
          resetActiveVariable()
          return;
        }

        if(toBoardIndex != boardActiveIndex) {
          const cardsLength = boardCards[toBoardIndex].cards.length
          for (let index = 0; index < boardCards[toBoardIndex].cards.length; index++) {
            if(cardsLength-1-index == toCardIndex) {
              cardActive.style.left = `${boardCards[toBoardIndex].rect.left}px`
              cardActive.style.top = `${boardCards[toBoardIndex].cardsRect[cardsLength-index].top-boarderStyles.gap/2}px`
              break;
            }
            const card = boardCards[toBoardIndex].cards[cardsLength-1-index];
            const cardRect = boardCards[toBoardIndex].cardsRect[cardsLength-1-index];
            document.getElementById(card.id).style.top = `${cardRect.top+height+boarderStyles.gap/2}px`
          }

          for (let index = cardActiveIndex+1; index < boardCards[boardActiveIndex].cards.length; index++) {
            const card = boardCards[boardActiveIndex].cards[index];
            const cardRect = boardCards[boardActiveIndex].cardsRect[index-1];
            document.getElementById(card.id).style.top = `${cardRect.top}px`
          }

          const NEWMULTIPLEDATA = [...MULTIPLEDATA];
          const newBoardCards = [...boardCards];
          console.log("NEWMULTIPLEDATA[boardActiveIndex].cards: ", NEWMULTIPLEDATA[boardActiveIndex])
          const dataMove = NEWMULTIPLEDATA[boardActiveIndex].data.splice(cardActiveIndex, 1)
          const cardElMove = newBoardCards[boardActiveIndex].cards.splice(cardActiveIndex, 1)

          const newCardForToBoard = [];
          const newCardElForToBoard = [];
          for (let index = 0; index <= NEWMULTIPLEDATA[toBoardIndex].data.length; index++) {
            if(index < toCardIndex+1) {
              newCardForToBoard[index] = NEWMULTIPLEDATA[toBoardIndex].data[index];
              newCardElForToBoard[index] = newBoardCards[toBoardIndex].cards[index];

            }else if(index == toCardIndex+1) {
              newCardForToBoard[index]=dataMove[0]
              newCardElForToBoard[index]=cardElMove[0]
            }else {
              newCardForToBoard[index] = NEWMULTIPLEDATA[toBoardIndex].data[index-1];
              newCardElForToBoard[index] = newBoardCards[toBoardIndex].cards[index-1];
            }
          }
          NEWMULTIPLEDATA[toBoardIndex].data = newCardForToBoard
          newBoardCards[toBoardIndex].cards = newCardElForToBoard;
          boardCards.forEach((bc, bci) => {
            bc.cards.forEach((ce, ci) => {
              ce.removeEventListener('mousedown', () => {
                cardActiveIndex = ci
                boardActiveIndex = bci
                if(onDragStartFn) onDragStartFn(bci, ci)
                cardActive = ce
              })
            })
          })
          boardCards = newBoardCards
          boardCards.forEach((b, index) => {
            boardCards[index]['rect'] = [];
            boardCards[index]['cardsRect'] = [];
          })
          setTimeout(() => {
            setBouding()
            initFunc()
          },100 )

          console.log({
            boardCards,
            newBoardCards,
            NEWMULTIPLEDATA, 
            MULTIPLEDATA
          })
        }

        resetActiveVariable()
    }
    lastY=0
  })
}
function resetActiveVariable(){
  cardActive.classList.remove("pg-card-active")
  cardActiveIndex = -1
  boardActiveIndex = -1
  cardActive = undefined;
}
function reOrderData(startIndex, endIndex, data){
  if(startIndex > endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    for (let index = startIndex; index > endIndex; index--) {
      if(index == endIndex+1) {
        data[index] = temp;
        continue;
      }
      data[index] = data[index-1]
    }
  }
  if(startIndex < endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    if(endIndex - startIndex < 2) {
      data[startIndex] = temp
      return;
    }
    for(let i = startIndex+1; i <= endIndex; i++) {
      if(i == endIndex) {
        data[i-1] = temp;
        continue;
      }
      
      data[i-1] = data[i]
    }
    
  }
}

function setBouding() {
  setTimeout(() => {
    boardCards.forEach((bc, bIdx) => {
      boardCards[bIdx]['rect'] = bc.el.getBoundingClientRect()
      bc.cards.forEach((c, cidx) => {
        c.setAttribute('data-index', `${bIdx}-${cidx}`)
        if(!boardCards[bIdx].cardsRect) {
          boardCards[bIdx].cardsRect = []
          boardCards[bIdx].cardsRect.push(c.getBoundingClientRect())
        } else {
          boardCards[bIdx].cardsRect.push(c.getBoundingClientRect())
        }
      })
    }) 
    baseTop = boardCards[0]['cardsRect'][0].y
  }, 10)
}

init({
  id: "container",
  width: '100%',
  height: '100%',
  boardWidth: "300px",
  boardHeight: "600px",
  padding: 20, 
  boardPadding: 20, 
  gap: 12,
  boardGap: 20,
  onDragStart:(boardIndex, cardIndex) => {
    console.log("onDragStart")
    console.log({boardIndex, cardIndex})
  },
  onDragEnd:(startIndex, endIndex, data) => {
    console.log("onDragStart: ", {startIndex, endIndex, data})
  },
  multipleData: [
    {
      id: "board-1",
      data: [
      {
        id: "item-1",
        title: "Item 1",
        description: "Board 1 Item 1",
      },
      {
        id: "item-2",
        title: "Item 2",
        description: "Board 1 Item 2",
      },
      {
        id: "item-3",
        title: "Item 3",
        description: "Board 1 Item 3",
      },
      {
        id: "item-4",
        title: "Item 4",
        description: "Board 1 Item 4",
      },
      {
        id: "item-5",
        title: "Item 5",
        description: "Board 1 Item 5",
      }],
    },{
      id: "board-2",
      data: [
      {
        id: "item-2-1",
        title: "Item 2 1",
        description: "Board 2 Item 1",
      },
      {
        id: "item-2-2",
        title: "Item 2 2",
        description: "Board 2 Item 2",
      },
      {
        id: "item-2-3",
        title: "Item 2 3",
        description: "Board 2 Item 3",
      }]}
  ]
})