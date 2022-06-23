let container = document.querySelector(".grid-container");
let resetBtn = document.getElementById("reset");

// function to create divs for grid container
let createDivs = times => {
    for(let i = 1; i <= times; i++) {
        let div = document.createElement("div");
        div.className=(`grid-div`);
        container.appendChild(div);
    }
}

createDivs(256);

// add event listener to grid container to change background color during mouseover
container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black";
});

// function to reset grid background color
let resetGrid = () => {
    let divs = document.querySelectorAll(".grid-div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    });
}

resetBtn.addEventListener('click', resetGrid);
