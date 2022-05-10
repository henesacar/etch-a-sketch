const content = document.getElementById("content");

const grid = document.getElementsByClassName("grid-item");

const sizeBtn = document.getElementById("sizer");
sizeBtn.addEventListener("click", work.bind(null, 1));

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clearGrid);

const negativeBtn = document.getElementById("negative");
negativeBtn.addEventListener("click", negative);

const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", work.bind(null, 2));

//To create the board
function makeRows(rowN, colN) {
  content.style.setProperty("--grid-rows", rowN);
  content.style.setProperty("--grid-cols", colN);
  for (let i = 0; i < rowN * colN; i++) {
    let cell = document.createElement("div");
    cell.innerHTML = '&nbsp;';
    content.appendChild(cell).className = "grid-item border border-dark";
  }
}

//To remove the previous board if it exists
function clearRows() {
  while (grid.length > 0) {
    grid[0].parentNode.removeChild(grid[0]);
  }
}


//To change board color
function changeColor(index) {
  grid[index].classList.add("change");
}

//random color appliance
function randomColor(index) {
  let random = Math.floor(Math.random() * 16777215).toString(16);
  grid[index].style.backgroundColor = "#" + random;
}

//To apply the colors
function applyColor(choice) {
  for (let i = 0; i < grid.length; i++) {
    if (choice === 1) {
      grid[i].addEventListener("mouseenter", changeColor.bind(null, i));
    } if (choice === 2){
      grid[i].addEventListener("mouseenter", randomColor.bind(null, i));
    }
  }
}

//To change the size of the grid and determine it
function gridSize() {
  let win = window.prompt("Please enter the grid size");
  let size = parseInt(win);
  if (size >= 100) {
    size = 100
  }
  return size;
}

//For clearing existing grid
function clearGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.remove("change");
  }
}

//For making the colors negative
function negative() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].classList.toggle("change");
  }
}

function work(choice) {
  let size = gridSize()
  clearRows();
  makeRows(size, size);
  applyColor(choice);
}