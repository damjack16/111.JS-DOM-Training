const list = document.querySelector('.list');
const checkboxes = list.querySelectorAll(".list-element-col input[type='checkbox']");

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function () {
        const box = this;
        const listElement = box.parentElement.parentElement;
        const nameInput = box.parentElement.nextElementSibling.lastElementChild;
        const surnameInput = listElement.lastElementChild.lastElementChild;
        if (this.checked) {
            listElement.classList.add('confirm');
            nameInput.disabled = true;
            surnameInput.disabled = true;
        } else {
            listElement.classList.remove('confirm');
            nameInput.disabled = false;
            surnameInput.disabled = false;
        }
    })
}