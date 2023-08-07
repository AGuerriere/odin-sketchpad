const gridContainer = document.getElementById('gridContainer');
let squareColor = '#2efffe';
let gridSquares = document.querySelectorAll('#gridContainer > div');

// create a grid of size * size divs that is always 1000px
const createGrid = (size) => {
  // Remove all previous divs and event listeners
  gridContainer.replaceChildren();
  removeMouseoverListeners();

  // Calculate the size of each grid item based on the number of items and the container size
  const gridItemSize = (700 / size);

  // create and add new divs
  for(let i = 0; i < (size * size); i++) {
    let gridItem = document.createElement('div');
    gridItem.style.width = `${gridItemSize}px`;
    gridItem.style.height = `${gridItemSize}px`;
    gridContainer.append(gridItem);
  }

  // add grid style
  gridContainer.style.gridTemplateColumns = `repeat(${size}, ${gridItemSize}px`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, ${gridItemSize}px`;

  addListener(squareColor);
  colorFillGrid();
}

createGrid(16);

// add an event listener for each of the squares in #gridContainer
function addListener(color) {
  gridSquares = document.querySelectorAll('#gridContainer > div');
  gridSquares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = color;
    });
  });
}

// Input slider changes size of the grid
const rangeSlider = document.getElementById('rangeSlider');
const sliderDisplay = document.querySelector('.sliderDisplay');
rangeSlider.addEventListener('change', (e) => {
  createGrid(rangeSlider.value);
  sliderDisplay.innerText = `${rangeSlider.value} x ${rangeSlider.value}`;
});

// Color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', (e) => {
  squareColor = colorPicker.value;
});

// Eraser
const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
  squareColor = 'white';
});

// Multicolor
const multicolor = document.querySelector('.multicolor');
multicolor.addEventListener('click', () => {
  gridSquares.forEach(square => {
    const randomColor = getRandomColor();
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = randomColor;
    });
  });
});

// Color Fill
function colorFillGrid() {
  const colorFill = document.querySelector('.colorFill');
  const gridItems = document.querySelectorAll('#gridContainer > *');
  colorFill.addEventListener('click', () => {
    gridItems.forEach((div) => {
      div.style.backgroundColor = colorPicker.value;
    });
  });
}

// Clear
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  gridSquares.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function removeMouseoverListeners() {
  gridSquares.forEach(square => {
    square.removeEventListener("mouseover", () => {});
  });
}
