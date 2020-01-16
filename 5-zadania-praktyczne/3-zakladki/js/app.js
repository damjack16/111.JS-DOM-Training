const js = document.querySelector('#js');
const python = document.querySelector('#python');
const pascal = document.querySelector('#turbo-pascal');
const liList = document.querySelectorAll('li');
const divs = document.querySelectorAll('.tab-content');

liList.forEach(li => {
    li.addEventListener('click', () => {
        for (let i = 0; i < divs.length; i++) {
            if (li.firstElementChild.getAttribute("href") === `#${divs[i].id}`) {
                // Remove active class from each li
                liList.forEach(item => {
                    item.classList.remove('tab-el-active');
                })
                divs.forEach(div => {
                    // Remove active class to each div
                    div.classList.remove('tab-content-active');
                })
                // Add active class to clicked li
                li.classList.add('tab-el-active')
                // Add active class to div with same id as a clicked li
                divs[i].classList.add('tab-content-active');
            }
        }
    });
})