import "./styles.css"
var CONTAINER_EL = undefined;
const containerClassName = "pg-board-container";
var cardsBounding = [];
var cards = [];
var isDrag = false;
var cardActive = undefined;
var cardActiveIndex = -1;
var baseTop = 0;
var cardGap = 0;
var onDragStartCb = undefined;
var onDragEndCb = undefined;
var list = [];

function createContainer({ id, width, height, padding }) {
  CONTAINER_EL = document.getElementById(id);
  if (!CONTAINER_EL) throw new Error(`Element with ${id} is not available!`);
  CONTAINER_EL.classList.add(containerClassName);
  CONTAINER_EL.style.width = width;
  CONTAINER_EL.style.height = height;
  if (padding) CONTAINER_EL.style.padding = `${padding}px`;
}

function createElement(tag, id, className) {
  const newEl = document.createElement(tag);
  if (id) newEl.id = id;
  if (className) newEl.classList.add(className);
  return newEl;
}

function createCard({ id, title, description, index, gap }) {
  const cardEl = createElement("div", `${id}-board-item-container`, "pg-card");
  const top = index * 106 + (index + 1) * gap;
  cardEl.style.top = `${top}px`;

  const titleEl = createElement("h6", `${id}-title`, "pg-card-title");
  titleEl.innerHTML = title;

  const descriptionEl = createElement(
    "p",
    `${id}-title`,
    "pg-board-description"
  );
  descriptionEl.innerHTML = description;

  cardEl.append(titleEl);
  cardEl.append(descriptionEl);

  return cardEl;
}

/**
 * Initializes a draggable container with cards.
 *
 * @param {Object} config - Configuration object.
 * @param {string} config.id - The ID of the container element.
 * @param {number} config.gap - The gap (in pixels) between cards in the container.
 * @param {string} config.width - The CSS width style applied to the container element.
 * @param {string} config.height - The CSS height style applied to the container element.
 * @param {number} config.padding - The padding (in pixels) applied to the container element.
 * @param {Array<Object>} config.data - The list of card data objects used for drag-and-drop elements.
 * @param {string} config.data[].id - The unique ID of the card.
 * @param {string} config.data[].title - The title of the card.
 * @param {string} config.data[].description - The description of the card.
 * @param {Function} config.onDragStart - Callback triggered when a card starts being dragged.
 * @param {Function} config.onDragEnd - Callback triggered when a card ends being dragged.
 *
 * @callback onDragStart
 * @param {number} cardIndex - The index of the card that is being dragged.
 *
 * @callback onDragEnd
 * @param {number} startIndex - The initial index of the card being dragged.
 * @param {number} endIndex - The final index of the card after dropping.
 * @param {Array<Object>} updatedData - The updated list of card data.
 */
function init({
  id,
  gap,
  width,
  height,
  padding,
  data,
  onDragStart,
  onDragEnd,
}) {
  cardGap = gap;
  onDragStartCb = onDragStart;
  onDragEndCb = onDragEnd;
  list = data;
  createContainer({ id, width, height, padding });
  data.forEach((item, index) => {
    const cardEL = createCard({ ...item, index, gap });
    cardEL.setAttribute("data-index", index);
    CONTAINER_EL.append(cardEL);
    cards.push(cardEL);
  });
  setBouding();
  initFunc();
}

function initFunc() {
  var lastY = 0;
  cards.forEach((ce, ci) => {
    ce.addEventListener("mousedown", () => {
      cardActiveIndex = parseInt(ce.dataset.index);
      if (onDragStartCb) onDragStartCb(cardActiveIndex);
      cardActive = ce;
    });
  });

  CONTAINER_EL.addEventListener("mousedown", (e) => {
    // const baseTop = cardsBounding[0].y
    isDrag = true;
    const top = e.clientY - baseTop;
    lastY = top;
    if (cardActive) cardActive.classList.add("pg-card-active");
    setTimeout(() => {
      if (cardActive) cardActive.classList.add("pg-card-active");
    }, 10);
  });

  CONTAINER_EL.addEventListener("mousemove", (e) => {
    // const baseTop = cardsBounding[0].y
    const top = e.clientY - baseTop;
    if (isDrag && cardActive) {
      if (lastY == 0) {
        cards.forEach((c) => {
          c.classList.add("no-copy");
        });
      }
      const Y = parseInt(cardActive.style.top.replace("px", "")) + top - lastY;
      cardActive.style.top = `${Y}px`;
      lastY = top;
    }
  });

  CONTAINER_EL.addEventListener("mouseup", (e) => {
    isDrag = false;
    if (cardActive) {
      if (lastY + baseTop > cardsBounding[cardActiveIndex].y) {
        const indexMoveCards = [];
        cardsBounding.forEach((ce, ci) => {
          if (
            cardActive.getBoundingClientRect().y > ce.y &&
            ci > cardActiveIndex
          ) {
            indexMoveCards.push(ci);
          }
        });
        const cardTemp = cards[cardActiveIndex];
        for (const index of indexMoveCards) {
          cards[index].style.top = `${
            cardsBounding[index - 1].y - baseTop + cardGap
          }px`;
          cards[index - 1] = cards[index];
          cards[index].setAttribute(
            "data-index",
            parseInt(cards[index].dataset.index) - 1
          );
        }
        if (indexMoveCards.length > 0) {
          const idx = indexMoveCards[indexMoveCards.length - 1];
          cards[idx] = cardTemp;
          cardActive.style.top = `${
            cardsBounding[idx].y - baseTop + cardGap
          }px`;
          cardActive.setAttribute("data-index", idx);
        }
        reOrderData(
          cardActiveIndex,
          indexMoveCards[indexMoveCards.length - 1],
          list
        );
        if (onDragEndCb)
          onDragEndCb(
            cardActiveIndex,
            indexMoveCards[indexMoveCards.length - 1],
            list
          );
      } else if (lastY + baseTop < cardsBounding[cardActiveIndex].y) {
        const indexMoveCards = [];
        cardsBounding.forEach((ce, ci) => {
          if (
            cardActive.getBoundingClientRect().y +
              cardActive.getBoundingClientRect().height <
              ce.y + ce.height &&
            ci < cardActiveIndex
          ) {
            indexMoveCards.push(ci);
          }
        });

        const cardTemp = cards[cardActiveIndex];
        for (const index of indexMoveCards.reverse()) {
          cards[index].style.top = `${
            cardsBounding[index + 1].y - baseTop + cardGap
          }px`;
          cards[index + 1] = cards[index];
          cards[index].setAttribute(
            "data-index",
            parseInt(cards[index].dataset.index) + 1
          );
        }
        if (indexMoveCards.length > 0) {
          const idx = cardActiveIndex - indexMoveCards.length;
          cards[idx] = cardTemp;
          cardActive.style.top = `${
            cardsBounding[idx].y - baseTop + cardGap
          }px`;
          cardActive.setAttribute("data-index", idx);
        }

        reOrderData(
          cardActiveIndex,
          cardActiveIndex - indexMoveCards.length,
          list
        );
        if (onDragEndCb)
          onDragEndCb(
            cardActiveIndex,
            cardActiveIndex - indexMoveCards.length,
            list
          );
      }
      cardActive.classList.remove("pg-card-active");
      cardActiveIndex = -1;
      cardActive = undefined;
    }
    lastY = 0;
  });
}
function reOrderData(startIndex, endIndex, data) {
  if (startIndex > endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    for (let index = startIndex; index > endIndex; index--) {
      if (index == endIndex + 1) {
        data[index] = temp;
        continue;
      }
      data[index] = data[index - 1];
    }
  }
  if (startIndex < endIndex) {
    const temp = data[endIndex];
    data[endIndex] = data[startIndex];
    if (endIndex - startIndex < 2) {
      data[startIndex] = temp;
      return;
    }
    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (i == endIndex) {
        data[i - 1] = temp;
        continue;
      }

      data[i - 1] = data[i];
    }
  }
}

function setBouding() {
  setTimeout(() => {
    cards.forEach((e) => {
      cardsBounding.push(e.getBoundingClientRect());
    });
    baseTop = cardsBounding[0].y;
  }, 10);
}

export { init };
