const list = document.querySelectorAll('li');
list.forEach(element => {
    const strong = element.querySelector('.status');
    console.log(element)
    if (element.dataset.status === "up") {
        strong.innerText = "dodatni"
        strong.style.color = "green"
    } else if (element.dataset.status === "no-change") {
        strong.innerText = "bez zmian"
        strong.style.color = "blue"
    } else {
        strong.innerText = "ujemny"
        strong.style.color = "red"
    }
})