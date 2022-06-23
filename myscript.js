let container = document.querySelector(".grid-container");
console.log(container);


container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "orange";
});

let createDivs = times => {
    for(let i = 1; i <= times; i++) {
        let div = document.createElement("div");
        div.className=(`grid-div`);
        container.appendChild(div);
    }
}


createDivs(256);