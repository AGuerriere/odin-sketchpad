const gridContainer = document.getElementById('gridContainer')

// create a grid of size * size divs that is always 1000px
const createGrid = (size) => {
  // Remove all previous divs
  gridContainer.replaceChildren()

  // Calculate the size of each grid item based on the number of items and the container size
  const gridItemSize = 500 / size;


  // create and add new divs
  for(let i = 0; i < (size * size); i++) {
    let gridItem = document.createElement('div')
    gridItem.style.width = `${gridItemSize}px`;
    gridItem.style.height = `${gridItemSize}px`;
    gridContainer.append(gridItem)
  }
  // add grid style
  gridContainer.style.gridTemplateColumns = `repeat(${size}, ${gridItemSize}px`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, ${gridItemSize}px`;
  
  addListener();
}

createGrid(16)

// add an event listener for each of the suqares in #gridContainer
function addListener(){
  const gridSquares = document.querySelectorAll('#gridContainer > div')
  gridSquares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = 'aqua'
  })
});
}



const rangeSlider = document.getElementById('rangeSlider')
rangeSlider.addEventListener('change', (e) => createGrid(rangeSlider.value))