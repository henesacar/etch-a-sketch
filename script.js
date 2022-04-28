const content = document.getElementById("container");

function makeRows(rowN,colN){
    content.style.setProperty("--grid-rows",rowN);
    content.style.setProperty("--grid-cols",colN);
    for(i = 0; i < (rowN*colN); i++){
        let cell = document.createElement("div");
        cell.innerText = (i+1);
        content.appendChild(cell).className = "grid-item";
    }
}
makeRows(16,16);
const grid = document.getElementsByClassName("grid-item");

function changeColor(){
    for(let i = 0;i < grid.length;i++){
        grid[i].classList.toggle("change");
    }
}

for(let i = 0;i < grid.length;i++){
    grid[i].addEventListener("mouseenter",changeColor);
    //grid[i].addEventListener("mouseover",changeColor);
}