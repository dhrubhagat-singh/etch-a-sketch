const grid = document.querySelector(".grid");
const clear = document.querySelector("button");

const size = document.querySelector("#size");
let input = 10



function drawGrid() {
        for (let i = 0; i < (input ** 2); i++) {
                grid.setAttribute("style", `grid-template-columns: repeat(${input},1fr);`)
                let div = document.createElement("div");
                div.style.paddingTop = "1em";
                grid.appendChild(div);
        }
}

drawGrid();



function rndInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
}


function color() {
        let divs = grid.querySelectorAll("div");
        divs.forEach((div) => {
                div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = `rgb(${rndInt(0, 256)},${rndInt(0, 256)},${rndInt(0, 256)})`;
                });
        });
}

color();

clear.addEventListener("click", function () {
        let divs = grid.querySelectorAll("div");
        input = 0;
        divs.forEach((div) => {
                // div.style.backgroundColor = 'white';
                grid.removeChild(div);
        });
        input = prompt("How big should the new box be?");
        input = Number(input);
        drawGrid();
        color();
});





/* old code


let divs = grid.querySelectorAll("div");



divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `rgb(${rndInt(0, 256)},${rndInt(0, 256)},${rndInt(0, 256)})`;
        });
});




clear.addEventListener("click", function () {
        input = 0;
        divs.forEach((div) => {
               // div.style.backgroundColor = 'white';
                grid.removeChild(div);
        });
        input = prompt("How big should the new box be?");
        input = Number(input);
        drawGrid();
});

*/