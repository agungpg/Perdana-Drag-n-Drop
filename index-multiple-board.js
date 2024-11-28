const PerdanaDnDMultipleData = {
  data: undefined,
  container: undefined,
  containerClassName: "pg-board-container",
  boardClassName: "pg-board",
  elements: [],
  isDraging: false,
  cardActiveElement: undefined,
  startBoardIndex: -1,
  startCardIndex: -1,
  baseTop: 0,
  onDragStartFn: undefined,
  onDragEndFn: undefined,
  boarderStyles: undefined,
  cardStyle: undefined,
  lastY: 0,
  lastX: 0,
}

function createContainer({id, width, height, padding, gap}) {
  PerdanaDnDMultipleData.container = document.getElementById(id);
  if(!PerdanaDnDMultipleData.container) throw new Error(`Element with ${id} is not available!`);
  PerdanaDnDMultipleData.container.classList.add(PerdanaDnDMultipleData.containerClassName);
  PerdanaDnDMultipleData.container.style.width = width
  PerdanaDnDMultipleData.container.style.height = height
  PerdanaDnDMultipleData.container.style.gap = `${gap}px`
  if(padding) PerdanaDnDMultipleData.container.style.padding = `${padding}px`;
}

function createBoards(multipleData) {
  const isFirstRender = (PerdanaDnDMultipleData.elements.length == 0)
  multipleData.forEach((bdata, bIndex) => {
    const board =  createElement('div', `${bdata.id}-board`, PerdanaDnDMultipleData.boardClassName);
    if(PerdanaDnDMultipleData.boarderStyles.width) board.style.width = PerdanaDnDMultipleData.boarderStyles.width
    if(PerdanaDnDMultipleData.boarderStyles.height) board.style.height = PerdanaDnDMultipleData.boarderStyles.height
    if(PerdanaDnDMultipleData.boarderStyles.gap)  board.style.gap = `${PerdanaDnDMultipleData.boarderStyles.gap}px`
    if(PerdanaDnDMultipleData.boarderStyles.padding) board.style.padding = `${PerdanaDnDMultipleData.boarderStyles.padding}px`
    const cards = []
    bdata.data.forEach((cdata, index) => {
      const card = createCard({...cdata, gap: PerdanaDnDMultipleData.boarderStyles.gap, index})
      board.append(card)
      card.setAttribute('data-index', `${bIndex}-${index}`)
      cards.push(card)
    })
    PerdanaDnDMultipleData.container.append(board)
    board.setAttribute('data-index', `${bIndex}`)
    if(isFirstRender){
      PerdanaDnDMultipleData.elements.push({
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

function init({id, gap, width, height, padding, data, multipleData, onDragStart, onDragEnd, boarderStyles}) {
  PerdanaDnDMultipleData.onDragStartFn = onDragStart
  PerdanaDnDMultipleData.onDragEndFn = onDragEnd
  list=data
  PerdanaDnDMultipleData.data = multipleData
  createContainer({id, width, height, padding, gap})
  PerdanaDnDMultipleData.boarderStyles = boarderStyles
  createBoards(multipleData)
  setBoundingRect()
  initDnDListener()
}
function onCardChoose(cardElement, boardIndex, cardIndex){
  PerdanaDnDMultipleData.startCardIndex = cardIndex
  PerdanaDnDMultipleData.startBoardIndex = boardIndex
  if(PerdanaDnDMultipleData.onDragStartFn) PerdanaDnDMultipleData.onDragStartFn(boardIndex, cardIndex)
  PerdanaDnDMultipleData.cardActiveElement = cardElement
}

function initDnDListener() {
  document.querySelectorAll('.pg-board').forEach((be, bi) => {
    be.childNodes.forEach((ce, ci) => {
      ce.addEventListener('mousedown', () => onCardDrag(ce))
    })
  })
  PerdanaDnDMultipleData.container.addEventListener('mousemove', onCardMove)
  PerdanaDnDMultipleData.container.addEventListener('mouseup',onCardDrop)
}

function onCardDrag(ce) {
  PerdanaDnDMultipleData.isDraging=true
  const [boardIndex, cardIndex] = ce.dataset.index.split("-")
  PerdanaDnDMultipleData.startBoardIndex = parseInt(boardIndex)
  PerdanaDnDMultipleData.startCardIndex = parseInt(cardIndex)

  if(PerdanaDnDMultipleData.onDragStartFn) PerdanaDnDMultipleData.onDragStartFn(boardIndex, cardIndex)

  PerdanaDnDMultipleData.cardActiveElement = ce
  if(PerdanaDnDMultipleData.cardActiveElement) PerdanaDnDMultipleData.cardActiveElement.classList.add("pg-card-active")

  const top = ce.clientY - PerdanaDnDMultipleData.baseTop
  PerdanaDnDMultipleData.lastY = top
  PerdanaDnDMultipleData.lastX =  ce.clientX
}

function onCardMove(e) {
  if(!PerdanaDnDMultipleData.cardActiveElement || !PerdanaDnDMultipleData.isDraging) return;
  const top = e.clientY - PerdanaDnDMultipleData.baseTop
  if(PerdanaDnDMultipleData.isDraging && PerdanaDnDMultipleData.cardActiveElement) {
    if(PerdanaDnDMultipleData.lastY == 0) {
      cards.forEach(c => {
        c.classList.add("no-copy")
      })
    }
    const Y = parseInt(PerdanaDnDMultipleData.cardActiveElement.style.top.replace("px", "")) + top - PerdanaDnDMultipleData.lastY 
    const X = e.clientX-PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].rect.x- PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].rect.width/2;
    PerdanaDnDMultipleData.cardActiveElement.style.top = `${Y}px`
    PerdanaDnDMultipleData.cardActiveElement.style.left = `${X}px`
    PerdanaDnDMultipleData.lastX = e.clientX
    PerdanaDnDMultipleData.lastY = top
  }
}

function onCardDrop() {
  PerdanaDnDMultipleData.isDraging = false
  if(PerdanaDnDMultipleData.cardActiveElement) {
    const { x, y, width, height } = PerdanaDnDMultipleData.cardActiveElement.getBoundingClientRect();

    const {
        endBoardIndex,
        endCardIndex
      } = findEndIndex({x, y, width})

      if(endBoardIndex < 0){
        dropCardToTheOriginalPlace()
      }
      // drop card in the same board
      else if(endBoardIndex == PerdanaDnDMultipleData.startBoardIndex) {
        dropCardInTheSameBoard(endBoardIndex, endCardIndex, height)
      } else if(endBoardIndex != PerdanaDnDMultipleData.startBoardIndex) {
        // move card with animation
        moveCardToAnotherBoard(endBoardIndex, endCardIndex, height)
        // end move card with animation
        restructureData(endBoardIndex, endCardIndex+1)
      }
      

      //relayout element
      setTimeout(() => {
        PerdanaDnDMultipleData.elements.forEach((b, index) => {
          PerdanaDnDMultipleData.elements[index]['rect'] = [];
          PerdanaDnDMultipleData.elements[index]['cardsRect'] = [];
        })
        document.querySelectorAll(".pg-board").forEach(e => e.remove())
        createBoards(PerdanaDnDMultipleData.data)
        setBoundingRect()
        initDnDListener()
      }, 100)
      //end relayout element
      if(PerdanaDnDMultipleData.onDragEndFn) PerdanaDnDMultipleData.onDragEndFn(PerdanaDnDMultipleData.startCardIndex, PerdanaDnDMultipleData.startBoardIndex, endCardIndex+1, endBoardIndex, PerdanaDnDMultipleData.data)
      resetActiveVariable()
  }
  PerdanaDnDMultipleData.lastY=0
  PerdanaDnDMultipleData.lastX=0
}

function moveCardToAnotherBoard(endBoardIndex, endCardIndex, height) {
  const cardsLength = PerdanaDnDMultipleData.elements[endBoardIndex].cards.length
  for (let index = 0; index < PerdanaDnDMultipleData.elements[endBoardIndex].cards.length; index++) {
    if(cardsLength-1-index == endCardIndex) {
      break;
    }
    
    const card = PerdanaDnDMultipleData.elements[endBoardIndex].cards[cardsLength-1-index];
    const cardRect = PerdanaDnDMultipleData.elements[endBoardIndex].cardsRect[cardsLength-1-index];
    document.getElementById(card.id).style.top = `${cardRect.top+height+PerdanaDnDMultipleData.boarderStyles.gap/2}px`
  }

  for (let index = PerdanaDnDMultipleData.startCardIndex+1; index < PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].cards.length; index++) {
    const card = PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].cards[index];
    const cardRect = PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].cardsRect[index-1];
    document.getElementById(card.id).style.top = `${cardRect.top}px`
  }
}

function findEndIndex({x, y, width}){
  let endBoardIndex =  -1
  let endCardIndex = PerdanaDnDMultipleData.startCardIndex;

  for (let bIndex = 0; bIndex < PerdanaDnDMultipleData.elements.length; bIndex++) {
    const board = PerdanaDnDMultipleData.elements[bIndex];
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

function placeTheCard(card, top, left) {
  if(top) card.style.top = `${top}px`
  if(left) card.style.left = `${left}px`
}

function dropCardToTheOriginalPlace() {
  const {elements, startBoardIndex, startCardIndex, cardActiveElement} = PerdanaDnDMultipleData;
  placeTheCard(cardActiveElement, elements[startBoardIndex].cardsRect[startCardIndex].top, elements[startBoardIndex].cardsRect[startCardIndex].left)
}

function dropCardInTheSameBoard(endBoardIndex, endCardIndex, height){
  const {startCardIndex, elements, boarderStyles, cardActiveElement} = PerdanaDnDMultipleData;
  const cardsLength = elements[endBoardIndex].cards.length

  if(endCardIndex+1 == startCardIndex) return;

  if(endCardIndex+1 > startCardIndex) {
    for (let index = startCardIndex; index < endCardIndex; index++) {
      // swap lower to higher card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index+1].id),
        elements[endBoardIndex].cardsRect[index].top-boarderStyles.gap/2
      )
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top-boarderStyles.gap/2
    )

    restructureData(endBoardIndex, endCardIndex)
  } else if(endCardIndex+1 < startCardIndex) {
    console.log("kedua")
    for (let index = cardsLength-2; index > endCardIndex; index--) {
      // swap higher to lower card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index].id),
        elements[endBoardIndex].cardsRect[index].top+height+boarderStyles.gap/2
      )
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top+height+boarderStyles.gap/2
    )
    restructureData(endBoardIndex, endCardIndex+1)
  }
}

function restructureData(endBoardIndex, endCardIndex) {
  console.log("restructureData: ", {endBoardIndex, endCardIndex})
    // restructure data
    const dataMove = PerdanaDnDMultipleData.data[PerdanaDnDMultipleData.startBoardIndex].data.splice(PerdanaDnDMultipleData.startCardIndex, 1)
    const cardElMove = PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex].cards.splice(PerdanaDnDMultipleData.startCardIndex, 1)
    PerdanaDnDMultipleData.data[endBoardIndex].data.splice(endCardIndex, 0, dataMove[0]);
    PerdanaDnDMultipleData.elements[endBoardIndex].cards.splice(endCardIndex, 0, cardElMove[0]);
    // end restructure data
}

function resetActiveVariable(){
  PerdanaDnDMultipleData.cardActiveElement.classList.remove("pg-card-active")
  PerdanaDnDMultipleData.startCardIndex = -1
  PerdanaDnDMultipleData.startBoardIndex = -1
  PerdanaDnDMultipleData.cardActiveElement = undefined;
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
  const { gap, height, padding } = PerdanaDnDMultipleData.boarderStyles
  let { elements, baseTop } = PerdanaDnDMultipleData

  document.querySelectorAll('.pg-board').forEach((be, bi) => {
    elements[bi]['rect'] = be.getBoundingClientRect()
    const curEl =  document.getElementById(elements[bi].el.id)
    be.childNodes.forEach((ce, ci) => {
      if(!elements[bi].cardsRect) {
        elements[bi].cardsRect = []
        elements[bi].cardsRect.push(ce.getBoundingClientRect())
      } else {
        elements[bi].cardsRect.push(ce.getBoundingClientRect())
      }
    })

    if(be.childNodes.length == 0) return;
    
    const {y: lastCardY, height: lastCardHeight} = elements[bi].cardsRect[elements[bi].cardsRect.length-1];
    if(elements[bi].rect.height < lastCardY+lastCardHeight && be.childNodes.length > 0) {
      const cardLength = elements[bi].cardsRect.length;
      const totalHeight = (lastCardHeight * cardLength + ((cardLength-1) * gap)) + (padding/2)
      curEl.style.height = `${totalHeight}px`
    } else {
      document.getElementById(elements[bi].el.id).style.height = `${height}`
    }

  })
  baseTop = elements[0].rect.y+(padding/2)
}

init({
  id: "container",
  width: '100%',
  height: '100%',
  padding: 20, 
  gap: 12,
  boarderStyles: {
    width: "300px",
    height: "600px",
    padding: 20,
    gap: 20,
  },
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