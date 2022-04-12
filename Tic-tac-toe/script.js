let isX = true;
window.addEventListener('click', elem => {
    let target = elem.target;
    if (target.className === "cell" && target.innerHTML.trim() === '') {
        if (isX) {
            target.innerHTML = 'X';
            checkResult('X');
            isX = false;
            changeTurn();
        } else {
            target.innerHTML = 'O';
            checkResult('O');
            isX = true;
            changeTurn();
        }
    }
});


function checkResult(sign) {
    let cells = document.getElementsByClassName('cell');

    if ((cells[0].innerHTML === sign &&
        cells[1].innerHTML === sign &&
        cells[2].innerHTML === sign)
        ||
        (cells[3].innerHTML === sign &&
            cells[4].innerHTML === sign &&
            cells[5].innerHTML === sign)
        ||
        (cells[6].innerHTML === sign &&
            cells[7].innerHTML === sign &&
            cells[8].innerHTML === sign)
        ||
        (cells[0].innerHTML === sign &&
            cells[3].innerHTML === sign &&
            cells[6].innerHTML === sign)
        ||
        (cells[1].innerHTML === sign &&
            cells[4].innerHTML === sign &&
            cells[7].innerHTML === sign)
        ||
        (cells[2].innerHTML === sign &&
            cells[5].innerHTML === sign &&
            cells[8].innerHTML === sign)
        ||
        (cells[0].innerHTML === sign &&
            cells[4].innerHTML === sign &&
            cells[8].innerHTML === sign)
        ||
        (cells[2].innerHTML === sign &&
            cells[4].innerHTML === sign &&
            cells[6].innerHTML === sign)
    ) {
        alert('Player ' + sign + ' won');
        clear();
        return;
    }

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML.trim() === '') {
            return;
        }
        if (i === 8) {
            clear();
            alert('Drawn');
        }
    }
}

function clear() {
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerHTML = '';
    }
}

function changeTurn() {
    let label = document.getElementById('turnLabel');
    if (!isX) {
        label.innerText = 'Player O turn'
    } else {
        label.innerText = 'Player X turn'
    }
}