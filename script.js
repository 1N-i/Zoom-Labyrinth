const cssRoot = document.documentElement;
const table = document.querySelector('table');
const playerImg = document.querySelector('img');

let cordX = 0, cordY = 0;
let sizeString = getComputedStyle(cssRoot).getPropertyValue("--size");
let sizeNum = parseFloat(sizeString);
let playerSizeString = getComputedStyle(cssRoot).getPropertyValue("--playerSize");
let playerSizeNum = parseFloat(playerSizeString);
upZoom(); downZoom();

document.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        moveUp();
    } else if (event.key === 's') {
        moveDown();
    } else if (event.key === 'a') {
        moveLeft();
    } else if (event.key === 'd') {
        moveRight();
    }
    updatePosition();
});

function isWall(x, y) {
    const targetCell = table.rows[y].cells[x];
    return targetCell.classList.contains('wall');
}

function moveUp() {
    if (cordY > 0 && !isWall(cordX, cordY - 1)) {
        cordY -= 1;
    }
}

function moveDown() {
    if (cordY < table.rows.length - 1 && !isWall(cordX, cordY + 1)) {
        cordY += 1;
    }
}

function moveLeft() {
    if (cordX > 0 && !isWall(cordX - 1, cordY)) {
        cordX -= 1;
    }
}

function moveRight() {
    if (cordX < table.rows[cordY].cells.length - 1 && !isWall(cordX + 1, cordY)) {
        cordX += 1;
    }
}

function updatePosition() {
    const targetRow = table.rows[cordY];
    const targetCell = targetRow.cells[cordX];
    targetRow = table.rows[cordY];
    targetCell = targetRow.cells[cordX];
    targetCell.appendChild(playerImg);
}

function upZoom() {
    sizeNum += 10;
    cssRoot.style.setProperty('--size', sizeNum + "px");
    playerSizeNum = sizeNum - 10;
    cssRoot.style.setProperty('--playerSize', playerSizeNum + "px");
}

function downZoom() {
    sizeNum -= 10;
    cssRoot.style.setProperty('--size', sizeNum + "px");
    playerSizeNum = sizeNum - 10;
    cssRoot.style.setProperty('--playerSize', playerSizeNum + "px");
}