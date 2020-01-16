const buttons = document.querySelectorAll('.car-toggle-detail');

buttons.forEach(btn => {
    const details = btn.parentElement.parentElement.nextElementSibling;
    const car = btn.parentElement.parentElement.parentElement;
    btn.addEventListener('click', () => {
        car.classList.toggle('car-show-detail');
        if (car.classList.contains('car-show-detail') === true) {
            details.style.display = "block";
            btn.innerText = "Schowaj detale";
        } else {
            details.style.display = "none";
            btn.innerText = "Pokaż detale";
        }
    })
})