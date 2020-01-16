const form = document.querySelector('.form');
const li = document.querySelector('.user');
const ulList = document.querySelector('.user-list');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // INPUTS VALUES
        const inputName = document.querySelector('#name');
        const inputPhone = document.querySelector('#phone');
        // ADD USER
        if (inputName.value === "" || inputPhone.value === "") {
            alert("Wpisz dane!")
        } else {
            const newUser = document.createElement('li');
            newUser.innerHTML = li.innerHTML;
            newUser.classList.add('user');
            const userName = newUser.querySelector('.user-name');
            const userPhone = newUser.querySelector('.user-phone');
            userName.innerText = inputName.value;
            userPhone.innerText = inputPhone.value;
            ulList.appendChild(newUser);
        }
    })
})
// DELETE USER
ulList.addEventListener('click', (e) => {
    if (e.target.closest('.btn.user-delete') !== null) {
        e.target.closest('.btn.user-delete').parentNode.remove()
    }
})