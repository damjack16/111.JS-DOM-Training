const button = document.querySelector('.btn');
const list = document.querySelector('.list');
let counter = 1;
const element = document.querySelector('.element');

function addElement() {
    const cloneElement = element.cloneNode(true);
    const span = cloneElement.querySelector('.element-title span');
    counter++;
    span.innerText = counter;
    list.appendChild(cloneElement);
}

function removeElement(e) {
    if (e.target.closest('.delete') !== null) {
        e.target.closest('.delete').parentNode.remove();
        counter--;
    }
}

function cloningElement(e) {
    if (e.target.closest('.clone') !== null) {
        const div = e.target.parentNode;
        const cloneDiv = div.cloneNode(true);
        const divSpan = cloneDiv.querySelector('.element-title span');
        counter++;
        divSpan.innerText = counter;
        list.appendChild(cloneDiv)
    }
}

button.addEventListener('click', addElement);
list.addEventListener('click', removeElement);
list.addEventListener('click', cloningElement);