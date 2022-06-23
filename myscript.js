let container = document.querySelector(".grid-container");
let resetBtn = document.getElementById("reset");
let randomBtn = document.getElementById("random");

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
    for(let i = 1; i <= times; i++) {
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



createDivs(144);
defaultDraw();

resetBtn.addEventListener('click', resetGrid);
randomBtn.addEventListener('click', randomColor);


