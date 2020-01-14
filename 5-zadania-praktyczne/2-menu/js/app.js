const liList = document.querySelectorAll('li');
const ulList = document.querySelector('.nav')
for (const li of liList) {
    li.addEventListener('click', (e) => {
        e.preventDefault();
        const children = [...ulList.children];
        children.forEach((child) => {
            child.classList.remove('nav-el-active')
        })
        li.classList.add('nav-el-active');
    })
}