const gridContainer = document.querySelector('.etchContainer')


function createGrid(num) {
    let x = num;
    let y = num;

    for (i = 0; i < y; i++) {
        for (j = 0; j < x; j++) {
           var newTile = document.createElement(`div`);
            newTile.classList.add('etchTile');
            //console.log(`${i} ${j} ${num}`)
            gridContainer.appendChild(newTile);
        }

        //console.log(`${i} ${num}`)

        addListeners();
    }
}

window.onload = function() {
    createGrid(16);
}

let gridChildren = gridContainer.children;

function addListeners () {
    for (let i = 0; i < gridChildren.length; i++) {
        gridChildren[i].addEventListener('mouseover', () => {
            gridChildren[i].classList.add('black');
        })
    }
}