const cssRoot = document.documentElement;
const table = document.querySelector("table");
const playerImg = document.querySelector("img");

let cordX = 0, cordY = 0;
let sizeString = getComputedStyle(cssRoot).getPropertyValue("--size");
let sizeNum = parseFloat(sizeString);
let playerSizeString = getComputedStyle(cssRoot).getPropertyValue("--playerSize");
let playerSizeNum = parseFloat(playerSizeString);

document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        moveUp();
    } else if (event.key === "s") {
        moveDown();
    } else if (event.key === "a") {
        moveLeft();
    } else if (event.key === "d") {
        moveRight();
    }
    updatePosition();
});

function isWall(x, y) {
    const targetCell = table.rows[y].cells[x];
    if (targetCell.classList.contains("endOne")) {
        multipleZoom(15)
        targetCell.classList.remove("endOne", "end");
    } else if (targetCell.classList.contains("endTwo")) {
        multipleZoom(6)
        targetCell.classList.remove("endTwo", "end");
    } else if (targetCell.classList.contains("endThree")) {
        multipleZoom(5)
        targetCell.classList.remove("endThree", "end");
    } else if (targetCell.classList.contains("endFour")) {
        multipleZoom(3)
        targetCell.classList.remove("endFour", "end");
    } else if (targetCell.classList.contains("endFive")) {
        multipleZoom(1)
        targetCell.classList.remove("endFive", "end");
    } else if (targetCell.classList.contains("endSix")) {
        multipleZoom(1)
        targetCell.classList.remove("endSix", "end");
    }
    return targetCell.classList.contains("wall");
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
    let targetRow = table.rows[cordY];
    let targetCell = targetRow.cells[cordX];
    targetRow = table.rows[cordY];
    targetCell = targetRow.cells[cordX];
    targetCell.appendChild(playerImg);
}

function downZoom() {
    sizeNum -= 1;
    cssRoot.style.setProperty("--size", sizeNum + "vw");
}

function multipleZoom(times) {
    if (times <= 0) return;
    downZoom();
    setTimeout(() => {
        multipleZoom(times - 1);
    }, 30); //Await 30ms
}