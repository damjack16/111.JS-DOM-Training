const links = document.querySelectorAll('.nav-link');
const liList = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from other li elements
        liList.forEach(li => {
            li.classList.remove('nav-el-active')
        })
        // Add class to clicked li
        link.parentNode.classList.add('nav-el-active');
        // Scroll
        document.querySelector(`${link.getAttribute('href')}`).scrollIntoView({
            behavior: 'smooth'
        })
    })
})