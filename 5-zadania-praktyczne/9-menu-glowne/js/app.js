// 1
const menu = document.querySelector('#menu');
menu.classList.add('menu');

// 2
const liList = menu.querySelectorAll('li');
const links = menu.querySelectorAll('a');

// 3
liList.forEach(link => {
    link.addEventListener('mouseover', () => {
        liList.forEach(item => {
            // Remove class from other elements
            item.classList.remove('active')
        })
        // Add class to current mouseover element
        link.classList.add('active');
    })
})

// 4
links.forEach(link => {
    link.addEventListener('click', (e) => {
        // 4a
        e.preventDefault();
        // 4b, c
        links.forEach(item => {
            item.parentNode.classList.add('collapsed');
            item.parentNode.classList.remove('expand');
        })
        link.parentNode.classList.remove('collapsed');
        link.parentNode.classList.toggle('expand');
        // 4d
        const expandElementTransitionEnd = function () {
            // 4e
            link.parentNode.removeEventListener('transitionend', expandElementTransitionEnd);
            // 4f
            console.log(link.getAttribute('href'));
            // 5a
            const button = document.createElement('button');
            button.classList.add('close');
            button.textContent = 'Zamknij';
            // 5b
            link.parentNode.appendChild(button);
            // 5c
            button.addEventListener('click', () => {
                button.parentNode.classList.remove('expand');
                // 5d
                links.forEach(element => {
                    element.parentNode.classList.remove('collapsed');
                })
                // 5e
                button.style.display = 'none'
            })
        }
        link.parentNode.addEventListener('transitionend', expandElementTransitionEnd)
    })
})