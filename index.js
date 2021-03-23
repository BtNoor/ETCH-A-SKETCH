const gridContainer = document.querySelector('.etchContainer')

//Creates grid after taking a num
function createGrid(num) {
    let x = num;
    let y = num;

    for (i = 0; i < y; i++) {
        for (j = 0; j < x; j++) {
           var newTile = document.createElement(`div`);
            newTile.classList.add('etchTile');
            gridContainer.appendChild(newTile);
        }

        resizeGrid(num)
        addListeners();
    }
}

//generates initial grid on page load
window.onload = function() {
    createGrid(32);
}

let gridChildren = gridContainer.children;

//Iterates over divs and adds eventlisteners for onmouseover
function addListeners () {
    for (let i = 0; i < gridChildren.length; i++) {
        gridChildren[i].addEventListener('mouseover', () => {
            //gridChildren[i].classList.add('black');
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
            //console.log(randomColor)
        gridChildren[i].style.backgroundColor = `#${randomColor}`
        })
    }
}

//Clears current etch by setting color back to white
function clearTiles () {
    for (i = 0; i < gridChildren.length; i++) {
        gridChildren[i].style.backgroundColor = `white`;
    }
}

//Takes user input, clears grid and creates a new one
function getGridSize () {
    let userGridSize = document.getElementById('userGridSize').value;
    clearGrid();

    if (userGridSize >= 100) {
        createGrid(100);
    } else if (userGridSize < 1) {
    createGrid(1);
    } else {
        createGrid(userGridSize);
    }
}

//Checks how many divs are there and clears them to ensure no doubling up of divs
function clearGrid() {
    for (let i = 0; i < gridChildren.length; i++) {
        for (let j = 0; i < gridChildren.length; j++) {
            gridContainer.removeChild(gridChildren[0]);
        }
    }
}

//Calculates what to set pixel size of divs given total grid size and applies css
function resizeGrid(num) {
    let gridPixelSize = (600 / num) - 2;
    for (let i = 0; i < gridChildren.length; i++) {
        gridChildren[i].style.cssText = `width: ${gridPixelSize}px; height: ${gridPixelSize}px;`

    }
}