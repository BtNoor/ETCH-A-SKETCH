const gridContainer = document.querySelector('.etchContainer')

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

window.onload = function() {
    createGrid(32);
}

let gridChildren = gridContainer.children;

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

function clearTiles () {
    for (i = 0; i < gridChildren.length; i++) {
        gridChildren[i].style.backgroundColor = `white`;
    }
}
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

function clearGrid() {
    for (let i = 0; i < gridChildren.length; i++) {
        for (let j = 0; i < gridChildren.length; j++) {
            gridContainer.removeChild(gridChildren[0]);
        }
    }
}


function resizeGrid(num) {
    let gridPixelSize = (600 / num) - 2;
    for (let i = 0; i < gridChildren.length; i++) {
        gridChildren[i].style.cssText = `width: ${gridPixelSize}px; height: ${gridPixelSize}px;`

    }
}