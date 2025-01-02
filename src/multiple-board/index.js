import "./styles.css";
import { createBoards, setBoundingRect, createContainer } from "./element";
import { initListener } from "./action";

export const PerdanaDnDMultipleData = {
  data: undefined,
  container: undefined,
  containerClassName: "m-pg-board-container",
  boardClassName: "m-pg-board",
  elements: [],
  isDraging: false,
  cardActiveElement: undefined,
  startBoardIndex: -1,
  startCardIndex: -1,
  baseTop: 0,
  onDragStartCb: undefined,
  onDragEndCb: undefined,
  boarderStyles: undefined,
  cardStyle: undefined,
  lastY: 0,
  lastX: 0,
};

function init({
  id,
  gap,
  width,
  height,
  padding,
  multipleData,
  onDragStart,
  onDragEnd,
  boarderStyles,
}) {
  PerdanaDnDMultipleData.onDragStartCb = onDragStart;
  PerdanaDnDMultipleData.onDragEndCb = onDragEnd;
  PerdanaDnDMultipleData.data = multipleData;
  PerdanaDnDMultipleData.boarderStyles = boarderStyles;

  createContainer({ id, width, height, padding, gap });
  createBoards(multipleData);
  setBoundingRect();
  initListener();
}

export { init };
