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
var startCardIndex = -1;
var startBoardIndex = -1;
var baseTop = 0;
var cardGap = 0
var onDragStartFn = undefined
var onDragEndFn = undefined
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
  const isFirstRender = (boardCards.length == 0)
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
      card.setAttribute('data-index', `${bIndex}-${index}`)
      cards.push(card)
    })
    CONTAINER_EL.append(board)
    board.setAttribute('data-index', `${bIndex}`)
    if(isFirstRender){
      boardCards.push({
        id: bdata.id,
        el: board,
        cards: cards
      })
    }
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
  MULTIPLEDATA = multipleData
  createContainer({id, width, height, padding, gap})
  boarderStyles = {
    height: boardHeight,
    gap: boardGap, 
    padding: boardPadding,
    width: boardWidth
  }
  createBoards(multipleData)
  setBoundingRect()
  initFunc()
}
function onCardChoose(cardElement, boardIndex, cardIndex){
  startCardIndex = cardIndex
  startBoardIndex = boardIndex
  if(onDragStartFn) onDragStartFn(boardIndex, cardIndex)
  cardActive = cardElement
}

function initFunc() {
  var lastY = 0;
  var lastX = 0;
  document.querySelectorAll('.pg-board').forEach((be, bi) => {
    be.childNodes.forEach((ce, ci) => {
      ce.addEventListener('mousedown', () => {
        const [boardIndex, cardIndex] = ce.dataset.index.split("-")
        startBoardIndex = parseInt(boardIndex)
        startCardIndex = parseInt(cardIndex)

        if(onDragStartFn) onDragStartFn(ci, ci)
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
      const X = e.clientX-boardCards[startBoardIndex].rect.x- boardCards[startBoardIndex].rect.width/2;
      cardActive.style.top = `${Y}px`
      cardActive.style.left = `${X}px`
      lastX = e.clientX
      lastY = top
    }
  })

  CONTAINER_EL.addEventListener('mouseup', (e) => {
    isDrag = false
    if(cardActive) {
      const { x, y, width, height } = cardActive.getBoundingClientRect();
        
      const {
          endBoardIndex,
          endCardIndex
        } = findEndIndex({x, y, width})

        // drop card in the same board
        if(endBoardIndex == startBoardIndex) {
          dropCardInTheSameBoard(endBoardIndex, endCardIndex, height)
        } else if(endBoardIndex != startBoardIndex) {
          // move card with animation
          moveCardToAnotherBoard(endBoardIndex, endCardIndex, height)
          // end move card with animation
          restructureData(endBoardIndex, endCardIndex+1)
        }
        

        //relayout element
        setTimeout(() => {
          boardCards.forEach((b, index) => {
            boardCards[index]['rect'] = [];
            boardCards[index]['cardsRect'] = [];
          })
          document.querySelectorAll(".pg-board").forEach(e => e.remove())
          createBoards(MULTIPLEDATA)
          setBoundingRect()
          initFunc()
        }, 100)
        //end relayout element
        onDragEndFn(startCardIndex, startBoardIndex, endCardIndex+1, endBoardIndex, MULTIPLEDATA)
        resetActiveVariable()
    }
    lastY=0
    lastX=0
  })
}
function moveCardToAnotherBoard(endBoardIndex, endCardIndex, height) {
  const cardsLength = boardCards[endBoardIndex].cards.length
  for (let index = 0; index < boardCards[endBoardIndex].cards.length; index++) {
    if(cardsLength-1-index == endCardIndex) {
      break;
    }
    
    const card = boardCards[endBoardIndex].cards[cardsLength-1-index];
    const cardRect = boardCards[endBoardIndex].cardsRect[cardsLength-1-index];
    document.getElementById(card.id).style.top = `${cardRect.top+height+boarderStyles.gap/2}px`
  }

  for (let index = startCardIndex+1; index < boardCards[startBoardIndex].cards.length; index++) {
    const card = boardCards[startBoardIndex].cards[index];
    const cardRect = boardCards[startBoardIndex].cardsRect[index-1];
    document.getElementById(card.id).style.top = `${cardRect.top}px`
  }
}

function findEndIndex({x, y, width}){
  let endBoardIndex = startBoardIndex;
  let endCardIndex = startCardIndex;

  for (let bIndex = 0; bIndex < boardCards.length; bIndex++) {
    const board = boardCards[bIndex];
      if(x >= board.rect.x && x+width <= board.rect.x+board.rect.width) {
        endBoardIndex = bIndex;
        for (let cIndex = 0; cIndex < board.cardsRect.length; cIndex++) {
          const cRect = board.cardsRect[cIndex];
          if(y > cRect.y) {
            endCardIndex = cIndex;
          }
        }
        break;
      }
  }

  return {
    endBoardIndex,
    endCardIndex
  }
}

function dropCardInTheSameBoard(endBoardIndex, endCardIndex, height){
  const cardsLength = boardCards[endBoardIndex].cards.length
  cardActive.style.top = `${boardCards[startBoardIndex].cardsRect[startCardIndex].y-boarderStyles.gap/2}px`
  cardActive.style.left = `${boardCards[startBoardIndex].cardsRect[startCardIndex].x-boardCards[0].rect.x}px`

  if(endCardIndex+1 == startCardIndex) return;

  if(endCardIndex+1 > startCardIndex) {
    for (let index = startCardIndex; index < endCardIndex; index++) {
      const cardRect = boardCards[endBoardIndex].cardsRect[index];
      const card = boardCards[endBoardIndex].cards[index+1];

      document.getElementById(card.id).style.top = `${cardRect.top-boarderStyles.gap/2}px`
    }
    document.getElementById(cardActive.id).style.top = `${boardCards[endBoardIndex].cardsRect[endCardIndex].top-boarderStyles.gap/2}px`

    restructureData(endBoardIndex, endCardIndex-1)
  } else if(endCardIndex+1 < startCardIndex) {
    for (let index = cardsLength-2; index > endCardIndex; index--) {
      const cardRect = boardCards[endBoardIndex].cardsRect[index];
      const card = boardCards[endBoardIndex].cards[index];

      document.getElementById(card.id).style.top = `${cardRect.top+height+boarderStyles.gap/2}px`
      if(index == endCardIndex+1){
        document.getElementById(cardActive.id).style.top = `${boardCards[endBoardIndex].cardsRect[index-1].top+height+boarderStyles.gap/2}px`
      }
    }
    restructureData(endBoardIndex, endCardIndex+1)
  }
}
function restructureData(endBoardIndex, endCardIndex) {
    // restructure data
    const dataMove = MULTIPLEDATA[startBoardIndex].data.splice(startCardIndex, 1)
    const cardElMove = boardCards[startBoardIndex].cards.splice(startCardIndex, 1)
    MULTIPLEDATA[endBoardIndex].data.splice(endCardIndex+1, 0, dataMove[0]);
    boardCards[endBoardIndex].cards.splice(endCardIndex+1, 0, cardElMove[0]);
    // end restructure data
}

function resetActiveVariable(){
  cardActive.classList.remove("pg-card-active")
  startCardIndex = -1
  startBoardIndex = -1
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

function setBoundingRect() {
    document.querySelectorAll('.pg-board').forEach((be, bi) => {
      boardCards[bi]['rect'] = be.getBoundingClientRect()
      be.childNodes.forEach((ce, ci) => {
        if(!boardCards[bi].cardsRect) {
          boardCards[bi].cardsRect = []
          boardCards[bi].cardsRect.push(ce.getBoundingClientRect())
        } else {
          boardCards[bi].cardsRect.push(ce.getBoundingClientRect())
        }
      })
    })
    baseTop = boardCards[0]['cardsRect'][0].y
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
    console.log("onDragStart: ", {boardIndex, cardIndex})
  },
  onDragEnd:(startCardIndex, startBoardIndex, endCardIndex, endBoardIndex, data) => {
    console.log("onDragStart: ", {startCardIndex, startBoardIndex, endCardIndex, endBoardIndex, data})
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
    },
    {
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
      }]
    },
    {
      id: "board-3",
      data: [
      {
        id: "item-3-1",
        title: "Item 3 1",
        description: "Board 3 Item 1",
      },
      {
        id: "item-3-2",
        title: "Item 3 2",
        description: "Board 3 Item 2",
      }
    ]
    }
  ]
})