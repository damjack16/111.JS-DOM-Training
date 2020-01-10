const btn = document.querySelector('.delete');
const ulList = document.querySelector('.list');
let liList = document.querySelectorAll("li");
// 1 method
// btn.addEventListener('click', () => {
//     ulList.innerHTML = "";
// })

// 2 method
btn.addEventListener('click', () => {
    for (const li of liList) {
        li.remove();
    }
    // delete it from memory by reset the array of li elements
    liList = [];
})