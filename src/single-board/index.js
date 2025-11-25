import "./styles.css";

const containerClassName = "pg-board-container";

class SingleBoard {
  constructor({
    id,
    gap = 0,
    width,
    height,
    padding,
    data = [],
    onDragStart,
    onDragEnd,
  }) {
    this.container = this.getContainer(id);
    this.gap = gap;
    this.data = [...data];
    this.callbacks = { onDragStart, onDragEnd };

    this.cards = [];
    this.cardHeight = 0;
    this.isDragging = false;
    this.active = { card: null, index: -1, startY: 0, startTop: 0 };

    this.applyContainerStyles({ width, height, padding });
    this.renderCards();
    this.bindContainerEvents();
    this.measureLayout();
  }

  getContainer(id) {
    const container = document.getElementById(id);
    if (!container) throw new Error(`Element with ${id} is not available!`);
    return container;
  }

  applyContainerStyles({ width, height, padding }) {
    this.container.classList.add(containerClassName);
    if (width) this.container.style.width = width;
    if (height) this.container.style.height = height;
    if (padding !== undefined) this.container.style.padding = `${padding}px`;
  }

  renderCards() {
    this.container.innerHTML = "";
    this.cards = this.data.map((item, index) => this.createCard(item, index));
    if (this.cards.length && !this.cardHeight) {
      this.cardHeight = this.cards[0].getBoundingClientRect().height;
    }
    if (this.cardHeight) this.positionCards();
  }

  createCard({ id, title, description }, index) {
    const cardEl = document.createElement("div");
    cardEl.id = `${id}-board-item-container`;
    cardEl.classList.add("pg-card");
    cardEl.dataset.index = index;

    const titleEl = document.createElement("h6");
    titleEl.id = `${id}-title`;
    titleEl.classList.add("pg-card-title");
    titleEl.innerHTML = title;

    const descriptionEl = document.createElement("p");
    descriptionEl.id = `${id}-description`;
    descriptionEl.classList.add("pg-board-description");
    descriptionEl.innerHTML = description;

    cardEl.append(titleEl);
    cardEl.append(descriptionEl);
    cardEl.addEventListener("mousedown", (event) =>
      this.handleCardMouseDown(event, cardEl)
    );

    this.container.append(cardEl);
    return cardEl;
  }

  bindContainerEvents() {
    this.boundMouseMove = this.handleContainerMouseMove.bind(this);
    this.boundMouseUp = this.handleContainerMouseUp.bind(this);
    this.container.addEventListener("mousemove", this.boundMouseMove);
    this.container.addEventListener("mouseup", this.boundMouseUp);
    this.container.addEventListener("mouseleave", this.boundMouseUp);
  }

  measureLayout() {
    requestAnimationFrame(() => {
      if (!this.cards.length) return;
      this.cardHeight = this.cards[0].getBoundingClientRect().height;
      this.positionCards();
    });
  }

  positionCards() {
    this.cards.forEach((card, index) => {
      card.dataset.index = index;
      card.style.top = `${this.slotTop(index)}px`;
    });
  }

  slotTop(index) {
    return this.gap + index * (this.cardHeight + this.gap);
  }

  handleCardMouseDown(event, card) {
    const index = Number(card.dataset.index);
    this.isDragging = true;
    this.active = {
      card,
      index,
      startY: event.clientY,
      startTop: this.parseTop(card.style.top),
    };
    card.classList.add("pg-card-active");
    if (this.callbacks.onDragStart) this.callbacks.onDragStart(index);
    event.preventDefault();
  }

  handleContainerMouseMove(event) {
    if (!this.isDragging || !this.active.card) return;
    const deltaY = event.clientY - this.active.startY;
    const newTop = this.active.startTop + deltaY;
    this.active.card.style.top = `${newTop}px`;
  }

  handleContainerMouseUp() {
    if (!this.isDragging || !this.active.card) return;

    const targetIndex = this.targetIndexFromPosition(this.active.card);
    const startIndex = this.active.index;
    this.isDragging = false;

    if (startIndex !== targetIndex) {
      this.reorder(startIndex, targetIndex);
      if (this.callbacks.onDragEnd) {
        this.callbacks.onDragEnd(startIndex, targetIndex, this.data);
      }
    } else {
      this.active.card.style.top = `${this.slotTop(startIndex)}px`;
    }

    this.active.card.classList.remove("pg-card-active");
    this.resetActive();
  }

  targetIndexFromPosition(card) {
    const top = this.parseTop(card.style.top);
    const slotHeight = this.cardHeight + this.gap;
    if (slotHeight <= 0) return this.active.index;
    const relativeTop = Math.max(0, top - this.gap);
    const projectedIndex = Math.round(relativeTop / slotHeight);
    return this.clampIndex(projectedIndex);
  }

  reorder(startIndex, targetIndex) {
    const [movedCard] = this.cards.splice(startIndex, 1);
    this.cards.splice(targetIndex, 0, movedCard);

    const [movedItem] = this.data.splice(startIndex, 1);
    this.data.splice(targetIndex, 0, movedItem);

    this.positionCards();
  }

  resetActive() {
    this.active = { card: null, index: -1, startY: 0, startTop: 0 };
  }

  parseTop(value) {
    const parsed = Number(String(value).replace("px", ""));
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  clampIndex(index) {
    return Math.min(Math.max(index, 0), this.cards.length - 1);
  }
}

/**
 * Initializes a draggable board instance for the given container.
 *
 * @param {Object} config
 * @param {string} config.id - Element id for the container.
 * @param {number} [config.gap] - Gap in pixels between cards.
 * @param {string} [config.width] - Width applied to the container.
 * @param {string} [config.height] - Height applied to the container.
 * @param {number} [config.padding] - Padding (px) applied to the container.
 * @param {Array<Object>} [config.data] - List of card data objects.
 * @param {Function} [config.onDragStart] - Fired when a drag begins.
 * @param {Function} [config.onDragEnd] - Fired when a drag completes.
 * @returns {SingleBoard}
 */
function init(config) {
  return new SingleBoard(config);
}

export { init };
