import { PerdanaDnDMultipleData } from "./index";
import { createBoards, setBoundingRect, reRenderBoards } from "./element";
function initListener() {
  document.querySelectorAll(".m-pg-board").forEach((be, bi) => {
    be.childNodes.forEach((ce, ci) => {
      ce.addEventListener("mousedown", () => onCardDrag(ce));
    });
  });
  PerdanaDnDMultipleData.container.addEventListener("mousemove", onCardMove);
  PerdanaDnDMultipleData.container.addEventListener("mouseup", onCardDrop);
}
var timeoutDrag = undefined
function onCardDrag(ce) {
  timeoutDrag = setTimeout(() => {
    PerdanaDnDMultipleData.isDraging = true;
    const [boardIndex, cardIndex] = ce.dataset.index.split("-");
    PerdanaDnDMultipleData.startBoardIndex = parseInt(boardIndex);
    PerdanaDnDMultipleData.startCardIndex = parseInt(cardIndex);
  
    if (PerdanaDnDMultipleData.onDragStartCb)
      PerdanaDnDMultipleData.onDragStartCb(boardIndex, cardIndex);
  
    PerdanaDnDMultipleData.cardActiveElement = ce;
    if (PerdanaDnDMultipleData.cardActiveElement)
      PerdanaDnDMultipleData.cardActiveElement.classList.add("m-pg-card-active");
  
    const top = ce.clientY - PerdanaDnDMultipleData.baseTop;
    PerdanaDnDMultipleData.lastY = top;
    PerdanaDnDMultipleData.lastX = ce.clientX;
  }, 200)
}

function onCardMove(e) {
  if (
    !PerdanaDnDMultipleData.cardActiveElement ||
    !PerdanaDnDMultipleData.isDraging
  )
    return;
  const top = e.clientY - PerdanaDnDMultipleData.baseTop;
  if (
    PerdanaDnDMultipleData.isDraging &&
    PerdanaDnDMultipleData.cardActiveElement
  ) {
    if (PerdanaDnDMultipleData.lastY == 0) {
      cards.forEach((c) => {
        c.classList.add("no-copy");
      });
    }
    const Y =
      parseInt(
        PerdanaDnDMultipleData.cardActiveElement.style.top.replace("px", "")
      ) +
      top -
      PerdanaDnDMultipleData.lastY;
    const X =
      e.clientX -
      PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex]
        .rect.x -
      PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex]
        .rect.width /
        2;
    PerdanaDnDMultipleData.cardActiveElement.style.top = `${Y}px`;
    PerdanaDnDMultipleData.cardActiveElement.style.left = `${X}px`;
    PerdanaDnDMultipleData.lastX = e.clientX;
    PerdanaDnDMultipleData.lastY = top;
  }
}

function onCardDrop() {
  clearTimeout(timeoutDrag)
  PerdanaDnDMultipleData.isDraging = false;
  if (PerdanaDnDMultipleData.cardActiveElement) {
    const { x, y, width, height } =
      PerdanaDnDMultipleData.cardActiveElement.getBoundingClientRect();

    const { endBoardIndex, endCardIndex } = findEndIndex({ x, y, width });

    if (endBoardIndex < 0) {
      dropCardToItsOriginalPlace();
    }
    // drop card in the same board
    else if (endBoardIndex == PerdanaDnDMultipleData.startBoardIndex) {
      dropCardInTheSameBoard(endBoardIndex, endCardIndex, height);
    } else if (endBoardIndex != PerdanaDnDMultipleData.startBoardIndex) {
      // move card with animation
      moveCardToAnotherBoard(endBoardIndex, endCardIndex, height);
      // end move card with animation
      restructureData(endBoardIndex, endCardIndex + 1);
    }

    // relayout element
    setTimeout(() => {
      PerdanaDnDMultipleData.elements.forEach((b, index) => {
        PerdanaDnDMultipleData.elements[index]["rect"] = [];
        PerdanaDnDMultipleData.elements[index]["cardsRect"] = [];
      });
      // const boardIndexes = [PerdanaDnDMultipleData.startBoardIndex];
      // if (endBoardIndex) boardIndexes.push(endBoardIndex);

      document.querySelectorAll(".m-pg-board").forEach((e) => e.remove());
      createBoards(PerdanaDnDMultipleData.data);

      // reRenderBoards(boardIndexes);
      setBoundingRect();
      initListener();
    }, 120);

    //end relayout element
    if (PerdanaDnDMultipleData.onDragEndCb)
      PerdanaDnDMultipleData.onDragEndCb(
        PerdanaDnDMultipleData.startCardIndex,
        PerdanaDnDMultipleData.startBoardIndex,
        endCardIndex + 1,
        endBoardIndex,
        PerdanaDnDMultipleData.data
      );
    resetActiveVariable();
  }
  PerdanaDnDMultipleData.lastY = 0;
  PerdanaDnDMultipleData.lastX = 0;
}
function moveCardToAnotherBoard(endBoardIndex, endCardIndex, height) {
  const cardsLength =
    PerdanaDnDMultipleData.elements[endBoardIndex].cards.length;
  for (
    let index = 0;
    index < PerdanaDnDMultipleData.elements[endBoardIndex].cards.length;
    index++
  ) {
    if (cardsLength - 1 - index == endCardIndex) {
      break;
    }

    const card =
      PerdanaDnDMultipleData.elements[endBoardIndex].cards[
        cardsLength - 1 - index
      ];
    const cardRect =
      PerdanaDnDMultipleData.elements[endBoardIndex].cardsRect[
        cardsLength - 1 - index
      ];
    document.getElementById(card.id).style.top = `${
      cardRect.top + height + PerdanaDnDMultipleData.boarderStyles.gap / 2
    }px`;
  }

  for (
    let index = PerdanaDnDMultipleData.startCardIndex + 1;
    index <
    PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex]
      .cards.length;
    index++
  ) {
    const card =
      PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex]
        .cards[index];
    const cardRect =
      PerdanaDnDMultipleData.elements[PerdanaDnDMultipleData.startBoardIndex]
        .cardsRect[index - 1];
    document.getElementById(card.id).style.top = `${cardRect.top}px`;
  }
}
function findEndIndex({ x, y, width }) {
  let endBoardIndex = -1;
  let endCardIndex = PerdanaDnDMultipleData.startCardIndex;

  for (
    let bIndex = 0;
    bIndex < PerdanaDnDMultipleData.elements.length;
    bIndex++
  ) {
    const board = PerdanaDnDMultipleData.elements[bIndex];
    if (x >= board.rect.x && x + width <= board.rect.x + board.rect.width) {
      endBoardIndex = bIndex;
      for (let cIndex = 0; cIndex < board.cardsRect.length; cIndex++) {
        const cRect = board.cardsRect[cIndex];
        if (y > cRect.y) {
          endCardIndex = cIndex;
        }
      }
      break;
    }
  }

  return {
    endBoardIndex,
    endCardIndex,
  };
}
function placeTheCard(card, top, left) {
  if (top) card.style.top = `${top}px`;
  if (left) card.style.left = `${left}px`;
  if (top) card.top = `${top}px`;
  if (left) card.left = `${left}px`;
}

function dropCardToItsOriginalPlace() {
  const { elements, startBoardIndex, startCardIndex, cardActiveElement } =
    PerdanaDnDMultipleData;
  
  placeTheCard(
    elements[startBoardIndex].cards[startCardIndex],
    elements[startBoardIndex].cardsRect[startCardIndex].top,
    elements[startBoardIndex].cardsRect[startCardIndex].left 
  );
}

function dropCardInTheSameBoard(endBoardIndex, endCardIndex, height) {
  const { startCardIndex, elements, boarderStyles, cardActiveElement } =
    PerdanaDnDMultipleData;
  const cardsLength = elements[endBoardIndex].cards.length;

  if (endCardIndex + 1 == startCardIndex) return;

  if (endCardIndex + 1 > startCardIndex) {
    for (let index = startCardIndex; index < endCardIndex; index++) {
      // swap lower to higher card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index + 1].id),
        elements[endBoardIndex].cardsRect[index].top - boarderStyles.gap / 2
      );
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top -
        boarderStyles.gap / 2
    );

    restructureData(endBoardIndex, endCardIndex);
  } else if (endCardIndex + 1 < startCardIndex) {
    for (let index = cardsLength - 2; index > endCardIndex; index--) {
      // swap higher to lower card
      placeTheCard(
        document.getElementById(elements[endBoardIndex].cards[index].id),
        elements[endBoardIndex].cardsRect[index].top +
          height +
          boarderStyles.gap / 2
      );
    }
    // swap the active card to the destination
    placeTheCard(
      document.getElementById(cardActiveElement.id),
      elements[endBoardIndex].cardsRect[endCardIndex].top +
        height +
        boarderStyles.gap / 2
    );
    restructureData(endBoardIndex, endCardIndex + 1);
  }
}

function restructureData(endBoardIndex, endCardIndex) {
  // restructure data
  const dataMove = PerdanaDnDMultipleData.data[
    PerdanaDnDMultipleData.startBoardIndex
  ].data.splice(PerdanaDnDMultipleData.startCardIndex, 1);
  const cardElMove = PerdanaDnDMultipleData.elements[
    PerdanaDnDMultipleData.startBoardIndex
  ].cards.splice(PerdanaDnDMultipleData.startCardIndex, 1);
  PerdanaDnDMultipleData.data[endBoardIndex].data.splice(
    endCardIndex,
    0,
    dataMove[0]
  );
  PerdanaDnDMultipleData.elements[endBoardIndex].cards.splice(
    endCardIndex,
    0,
    cardElMove[0]
  );
  // end restructure data
}

function resetActiveVariable() {
  PerdanaDnDMultipleData.cardActiveElement.classList.remove("m-pg-card-active");
  PerdanaDnDMultipleData.startCardIndex = -1;
  PerdanaDnDMultipleData.startBoardIndex = -1;
  PerdanaDnDMultipleData.cardActiveElement = undefined;
}

export { initListener };
