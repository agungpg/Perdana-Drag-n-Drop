import { PerdanaDnDMultipleData } from "./index";

function createContainer({ id, width, height, padding, gap }) {
  PerdanaDnDMultipleData.container = document.getElementById(id);
  if (!PerdanaDnDMultipleData.container)
    throw new Error(`Element with ${id} is not available!`);
  PerdanaDnDMultipleData.container.classList.add(
    PerdanaDnDMultipleData.containerClassName
  );
  PerdanaDnDMultipleData.container.style.width = width;
  PerdanaDnDMultipleData.container.style.height = height;
  PerdanaDnDMultipleData.container.style.gap = `${gap}px`;
  if (padding) PerdanaDnDMultipleData.container.style.padding = `${padding}px`;
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag);
  if (id) newEl.id = id;
  if (className) newEl.classList.add(className);
  return newEl;
}

function createCard({ id, title, description, index, gap }) {
  const cardEl = createElement(
    "div",
    `${id}-board-item-container`,
    "m-pg-card"
  );
  const top = index * 106 + (index + 1) * gap;
  cardEl.style.top = `${top}px`;
  
  const titleEl = createElement("h6", `${id}-title`, "m-pg-card-title");
  titleEl.innerHTML = title;

  const descriptionEl = createElement(
    "p",
    `${id}-title`,
    "m-pg-board-description"
  );
  descriptionEl.innerHTML = description;

  cardEl.append(titleEl);
  cardEl.append(descriptionEl);

  return cardEl;
}

function createBoards(multipleData) {
  const isFirstRender = PerdanaDnDMultipleData.elements.length == 0;
  multipleData.forEach((bdata, bIndex) => {
    const board = createElement(
      "div",
      `${bdata.id}-board`,
      PerdanaDnDMultipleData.boardClassName
    );
    if (PerdanaDnDMultipleData.boarderStyles.width)
      board.style.width = PerdanaDnDMultipleData.boarderStyles.width;
    if (PerdanaDnDMultipleData.boarderStyles.height)
      board.style.height = PerdanaDnDMultipleData.boarderStyles.height;
    if (PerdanaDnDMultipleData.boarderStyles.gap)
      board.style.gap = `${PerdanaDnDMultipleData.boarderStyles.gap}px`;
    if (PerdanaDnDMultipleData.boarderStyles.padding)
      board.style.padding = `${PerdanaDnDMultipleData.boarderStyles.padding}px`;
    const cards = [];
    bdata.data.forEach((cdata, index) => {
      const card = createCard({
        ...cdata,
        gap: PerdanaDnDMultipleData.boarderStyles.gap,
        index,
      });
      board.append(card);
      card.setAttribute("data-index", `${bIndex}-${index}`);
      cards.push(card);
    });
    PerdanaDnDMultipleData.container.append(board);
    board.setAttribute("data-index", `${bIndex}`);
    if (isFirstRender) {
      PerdanaDnDMultipleData.elements.push({
        id: bdata.id,
        el: board,
        cards: cards,
      });
    }
  });
}

function setBoundingRect() {
  const { gap, height, padding } = PerdanaDnDMultipleData.boarderStyles;
  let { elements, baseTop } = PerdanaDnDMultipleData;

  document.querySelectorAll(".m-pg-board").forEach((be, bi) => {
    elements[bi]["rect"] = be.getBoundingClientRect();
    const curEl = document.getElementById(elements[bi].el.id);
    be.childNodes.forEach((ce, ci) => {
      if (!elements[bi].cardsRect) {
        elements[bi].cardsRect = [];
        elements[bi].cardsRect.push(ce.getBoundingClientRect());
      } else {
        elements[bi].cardsRect.push(ce.getBoundingClientRect());
      }
    });

    if (be.childNodes.length == 0) return;

    const { y: lastCardY, height: lastCardHeight } =
      elements[bi].cardsRect[elements[bi].cardsRect.length - 1];
    if (
      elements[bi].rect.height < lastCardY + lastCardHeight &&
      be.childNodes.length > 0
    ) {
      const cardLength = elements[bi].cardsRect.length;
      const totalHeight =
        lastCardHeight * cardLength + (cardLength - 1) * gap + padding / 2;
      curEl.style.height = `${totalHeight}px`;
    } else {
      document.getElementById(elements[bi].el.id).style.height = `${height}`;
    }
  });
  baseTop = elements[0].rect.y + padding / 2;
}

export { createContainer, createBoards, setBoundingRect };
