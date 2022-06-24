let container = document.querySelector(".grid-container");
let divs = document.getElementsByClassName("grid-div");
let resetBtn = document.getElementById("reset");
let randomBtn = document.getElementById("random");
let gridBtn = document.getElementById("grid");

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

// function to create divs for grid container
let createDivs = times => {
    while(container.firstChild) {
        container.firstChild.remove();
    }
    container.style.gridTemplateColumns = `repeat(${times}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${times}, 1fr)`;
    for(let i = 1; i <= Math.pow(times,2); i++) {
        let div = document.createElement("div");
        div.className=(`grid-div`);
        container.appendChild(div);
    }
}

// function to draw on grid 
let defaultDraw = () => {
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
}

// function to reset grid background color
let resetGrid = () => {
    let divs = document.querySelectorAll(".grid-div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
    defaultDraw();
}

// function to change random color
let randomColor = () => {
    container.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = getRandomColor();
    });
}

// function to prompt user for grid size
let getNewGridSize = () => {
    let gridSize = prompt("Enter a new size for the grid.\nMUST BE UNDER 100.");
    if (gridSize >= 100 || gridSize <= 0) {
        alert("You did not enter a valid number for grid size!");
    } else {
        createDivs(gridSize);
    }
}

// add event listeners to buttons
resetBtn.addEventListener('click', resetGrid);
randomBtn.addEventListener('click', randomColor);
gridBtn.addEventListener('click', getNewGridSize);

createDivs(12);
defaultDraw();

