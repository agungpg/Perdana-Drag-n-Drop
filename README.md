# Perdana Drag-n-Drop

Lightweight drag-and-drop utilities for single-column lists and multi-column (kanban-style) boards. Ships a small bundle that exposes a `PerdanaDnD` global with `single` and `multiple` modules.

## Features
- Single list reordering with active/drag callbacks.
- Multiple board drag/drop with inter-board moves and simple auto-layout.
- Plain DOM/JS (no external UI deps); CSS included for default styling.
- Webpack build outputs a hash-named bundle and example page.

## Getting started
```bash
npm install
npm run build
```
After building, open `dist/example/index.html` in a browser to try the demo. The bundle is emitted as `dist/bundle.[hash].js` and registers `window.PerdanaDnD`.

## Usage
Include the built bundle and initialize either the single or multiple board module.

### Multiple board example
```html
<div id="container"></div>
<script src="./bundle.[hash].js"></script>
<script>
  const boards = [
    { id: "board-1", data: [{ id: "item-1", title: "Item 1", description: "Board 1 Item 1" }] },
    { id: "board-2", data: [{ id: "item-2-1", title: "Item 2 1", description: "Board 2 Item 1" }] },
  ];

  PerdanaDnD.multiple.init({
    id: "container",
    width: "100%",
    height: "100%",
    padding: 20,
    gap: 12,
    boarderStyles: { width: "300px", height: "600px", padding: 20, gap: 20 },
    multipleData: boards,
    onDragStart: (boardIndex, cardIndex) => console.log("start", { boardIndex, cardIndex }),
    onDragEnd: (startCardIndex, startBoardIndex, endCardIndex, endBoardIndex, data) =>
      console.log("end", { startCardIndex, startBoardIndex, endCardIndex, endBoardIndex, data }),
  });
</script>
```

### Single board example
```html
<div id="container"></div>
<script src="./bundle.[hash].js"></script>
<script>
  const items = [
    { id: "item-1", title: "Item 1", description: "Board 1 Item 1" },
    { id: "item-2", title: "Item 2", description: "Board 1 Item 2" },
  ];

  PerdanaDnD.single.init({
    id: "container",
    width: "300px",
    height: "600px",
    padding: 20,
    gap: 12,
    data: items,
    onDragStart: (cardIndex) => console.log("start", cardIndex),
    onDragEnd: (startIndex, endIndex, updatedData) => console.log("end", { startIndex, endIndex, updatedData }),
  });
</script>
```

## API options
- `id`: Container element id to attach the board.
- `width` / `height`: CSS sizes applied to the container.
- `padding`: Inner padding (pixels).
- `gap`: Vertical space between cards (pixels).
- `data`: (single) Array of `{ id, title, description }`.
- `multipleData`: (multiple) Array of boards `{ id, data: [...] }`.
- `boarderStyles`: (multiple) `{ width, height, padding, gap }` applied to each board.
- `onDragStart`: Callback when dragging begins.
- `onDragEnd`: Callback when a drop completes (signatures differ for single vs multiple).

## Development notes
- Source entry: `src/index.js` exports `single` and `multiple`.
- Build with `npm run build`; output lands in `dist/`.
- Edit `src/index.html` to change the demo; rebuilding regenerates `dist/example/index.html`.
