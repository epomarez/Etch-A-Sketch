const GRIDSIDE_SIZE = 450; //This must be sync with styles.css

const gridContainer = document.querySelector(".container");
const button = document.querySelector("button");


function generateGrid(squaresNumber) {

    let grid = new Array(squaresNumber);

    let squareSide_size = (GRIDSIDE_SIZE / squaresNumber)

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < (squaresNumber * squaresNumber); i++) {
        let div = document.createElement("div");
        div.style.cssText =
            `width:${squareSide_size}px; height:${squareSide_size}px; backgroundColor:rgb(244, 244, 244)`;

        div.addEventListener("mouseover",
            (event) => {
                event.target.style.backgroundColor = "black";
            }
        );

        grid[i] = div;
    }

    grid.forEach(square => {
        gridContainer.appendChild(square);
    });


}

button.addEventListener("click", (event) => {
    console.log("Hola");
    let squaresNumber = 
    prompt("Please enter the number of squares you want your grid to have. (1 to 100)");

    while((squaresNumber>100)||(squaresNumber<1)|| isNaN(squaresNumber)){
        squaresNumber = prompt("This is an invalid input, please enter between 1 to 100");
    }

    squaresNumber = parseInt(squaresNumber);

    generateGrid(squaresNumber);
});

generateGrid(5);