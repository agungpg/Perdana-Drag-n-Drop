var CONTAINER_EL = undefined;
var HEADER_EL = undefined;
const containerClassName = "pg-board-container"
var CARDHEIGHT = 0;
var cardsBounding = []
var cards = []
const tempCards = [];
var isDrag = false;
var cardActive = undefined;
var cardActiveIndex = -1;
var baseTop = 0;

function createContainer({id, title, description, width, height, padding}) {
  CONTAINER_EL = document.getElementById(id);
  if(!CONTAINER_EL) throw new Error(`Element with ${id} is not available!`);
  CONTAINER_EL.classList.add(containerClassName);
  CONTAINER_EL.style.width = width
  CONTAINER_EL.style.height = height
  if(padding) CONTAINER_EL.style.padding = `${padding}px`;
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag)
  if(id) newEl.id = id
  if(className) newEl.classList.add(className);
  return newEl;
}

function createHeader({id, title, description}) {
  const HEADER_EL = createElement('div', `${id}-header`, 'pg-board-header');
  
  const titleEl = createElement('h3', `${id}-title`, 'pg-board-title');
  titleEl.innerHTML  = title
  HEADER_EL.append(titleEl);
  
  
  const descriptionEl = createElement('p', `${id}-title`, 'pg-board-description');
  descriptionEl.innerHTML = description;
  HEADER_EL.append(descriptionEl)
  
  CONTAINER_EL.append(HEADER_EL)
}

function createBoardBody({gap, boards, padding, id}) {
  const totalBoard = boards.length;
  const containerWidthWithoutPadding = CONTAINER_EL.getBoundingClientRect().width - padding*2
  const boarItemWidth = containerWidthWithoutPadding / totalBoard - ((totalBoard - 1) * gap);

  
  const bodyEl = createElement('div', `${id}-body`, 'pg-board-body');
  bodyEl.style.display= 'flex';
  bodyEl.style.alignItems= 'stretch';
  bodyEl.style.justifyContent= 'space-between';
  bodyEl.style.flexGrow = '1'; 
  bodyEl.style.borderRadius='0 0 16px 16px';
  bodyEl.style.gap = `${gap}px`
  bodyEl.style.padding = '20px;'
  
  boards.forEach((board) => {
    const boardEl = createBoardItem({...board, width: boarItemWidth})
    bodyEl.append(boardEl)
  })
  CONTAINER_EL.append(bodyEl)
}

function createBoardItem({ id, title, description, data, width}){
  const boardItemContainerEl = createElement('div', `${id}-board-item-container`, 'board-item-container');
  boardItemContainerEl.style.borderRedius = '4px';
  boardItemContainerEl.style.width = `${width}px`;
  boardItemContainerEl.style.height = '100%'
  boardItemContainerEl.style.borderRadius = '4px';
  boardItemContainerEl.style.backgroundColor = 'white';
  boardItemContainerEl.style.display = 'flex';
  boardItemContainerEl.style.flexDirection = 'column'
  
  const boardItemHeaderEl = createElement('div', `${id}-board-header-item`, 'board-header-item');
  boardItemHeaderEl.style.borderRadius = '4px 4px 0 0';
  boardItemHeaderEl.style.padding= '8px';
  boardItemHeaderEl.style.textAlign = 'center';
  boardItemHeaderEl.style.backgroundColor = '#708090'
  boardItemHeaderEl.style.border = '1px solid black'

  const boardItemTitleEl = createElement('h5', `${id}-board-title-item`, 'board-title-item');
  boardItemTitleEl.innerHTML = title
  boardItemTitleEl.style.fontSize = '18px';
  boardItemTitleEl.style.margin = '0'
  boardItemTitleEl.style.padding = '0'
  
  const boardItemBodyEl = createElement('div', `${id}-board-body-item`, 'board-body-item');
  boardItemBodyEl.style.display = 'flex';
  boardItemBodyEl.style.flexDirection = 'column';
  boardItemBodyEl.style.gap = '8px'
  boardItemBodyEl.style.padding= '8px';
  boardItemBodyEl.style.position = 'relative';
  boardItemBodyEl.style.flexGrow = '1';
    
   data.forEach((item, index) => {
    const cardEL = createCard({...item, index })
    cardEL.setAttribute('data-index', index)
    boardItemBodyEl.append(cardEL)
    cards.push(cardEL)
  })

  boardItemHeaderEl.append(boardItemTitleEl)
  boardItemContainerEl.append(boardItemHeaderEl)
  boardItemContainerEl.append(boardItemBodyEl)
  return boardItemContainerEl;
}

function createCard({ id, title,  description, index }) {
  const cardEl = createElement('div', `${id}-board-item-container`, 'pg-card');
  const top = index * 106 +((index+1) * 16);
  cardEl.style.top = `${top}px`
  
  const titleEl = createElement('h6', `${id}-title`, 'pg-board-title');
  titleEl.innerHTML = title
  titleEl.style.fontSize = '16px';
  titleEl.style.margin = '0'
  titleEl.style.padding = '0'
    
  const descriptionEl = createElement('p', `${id}-title`, 'pg-board-description');
  descriptionEl.innerHTML = description;
  cardEl.append(titleEl)
  cardEl.append(descriptionEl)
  CARDHEIGHT = cardEl.getBoundingClientRect().height;
  return cardEl
}

function init({id, title, description, width, height, padding, gap, boards}) {
  createContainer({id, title, description, width, height,padding})
  createHeader({id, title, description})
  createBoardBody({id, gap, boards, padding})
  setBouding()
  initFunc()
}



function initFunc() {
  var lastY = 0;
  cards.forEach((ce, ci) => {
    ce.addEventListener('mousedown', () => {
      cardActiveIndex = parseInt(ce.dataset.index)
      cardActive = ce
    })
  })
  
  CONTAINER_EL.addEventListener('mousedown', (e) => {
    // const baseTop = cardsBounding[0].y
      isDrag=true
      const top = e.clientY - baseTop
      lastY = top
    if(cardActive) cardActive.classList.add("card-active")
    setTimeout(() => {
      if(cardActive) cardActive.classList.add("card-active")
    }, 10)
  })
  
  CONTAINER_EL.addEventListener('mousemove', (e) => {
    // const baseTop = cardsBounding[0].y
    const top = e.clientY - baseTop
    if(isDrag && cardActive) {
      if(lastY == 0) {
        cards.forEach(c => {
          c.classList.add("no-copy")
        })
      }
      const Y = parseInt(cardActive.style.top.replace("px", "")) + top - lastY 
      cardActive.style.top = `${Y}px`
      lastY = top
    }
  })



  CONTAINER_EL.addEventListener('mouseup', (e) => {
    isDrag = false
    // const baseTop = cardsBounding[0].y
    if(cardActive) {
        
        if(lastY + baseTop > cardsBounding[cardActiveIndex].y) {
            const indexMoveCards = [];
            cardsBounding.forEach((ce, ci) => {
                if(cardActive.getBoundingClientRect().y > ce.y && ci > cardActiveIndex) {
                    indexMoveCards.push(ci)
                }
            })
            const cardTemp = cards[cardActiveIndex];
            for (const index of indexMoveCards) {
                cards[index].style.top =  `${cardsBounding[index-1].y-baseTop+16}px`
                cards[index-1] = cards[index] 
                cards[index].setAttribute('data-index', parseInt(cards[index].dataset.index )-1)
            }
            if(indexMoveCards.length > 0) {
              const idx = indexMoveCards[indexMoveCards.length-1]
                cards[idx] = cardTemp
                cardActive.style.top = `${cardsBounding[idx].y-baseTop+16}px`
                cardActive.setAttribute('data-index', idx)
            }
        } else if(lastY + baseTop < cardsBounding[cardActiveIndex].y) {
            const indexMoveCards = [];
            cardsBounding.forEach((ce, ci) => {
              if(cardActive.getBoundingClientRect().y + cardActive.getBoundingClientRect().height < ce.y + ce.height && ci < cardActiveIndex) {
                indexMoveCards.push(ci);
              }
            })

            const cardTemp = cards[cardActiveIndex];
            for (const index of indexMoveCards.reverse()) {
                cards[index].style.top =  `${cardsBounding[index+1].y-baseTop+16}px`
                cards[index+1] = cards[index] 
                cards[index].setAttribute('data-index', parseInt(cards[index].dataset.index )+1)
            }
             if(indexMoveCards.length > 0) {
                const idx = cardActiveIndex-indexMoveCards.length
                cards[idx] = cardTemp
                cardActive.style.top = `${cardsBounding[idx].y-baseTop+16}px`
                cardActive.setAttribute('data-index', idx)
            }

        }
        cardActive.classList.remove("card-active")
        cardActiveIndex = -1
        cardActive = undefined;
    }
    lastY=0
  })
}

function setBouding() {
  
  setTimeout(() => {
    cards.forEach((e) => {
      cardsBounding.push(e.getBoundingClientRect())
    }) 
    baseTop = cardsBounding[0].y
  }, 10)
}

init({
  id: "container",
  title: "Front End Board",
  description: "This board contain all task related to frontend job",
  width: "100%",
  height: "1000px",
  padding: 20, 
  gap: 12,
  boards: [
    {
      id: "boards-1",
      title: "Board 1",
      description: "Ini board 1",
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
        }
      ]
    },
    {
      id: "boards-2",
      title: "Board 2",
      description: "Ini board 2",
      data: []
    },
    {
      id: "boards-3",
      title: "Board 3",
      description: "Ini board 3",
      data: []
    }
  ]
})