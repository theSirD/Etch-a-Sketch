let container = document.createElement("div");
container.classList.add('flex-container');
container.classList.add('grid');

document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add('flex-container');
    row.classList.add('row');

    for (let j = 0; j< 16; j++) {
        square = document.createElement("div");
        square.classList.add('square');

        row.appendChild(square);
    }

    container.appendChild(row);
}

document.body.appendChild(container);

