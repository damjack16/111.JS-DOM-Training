const ulList = document.querySelector("ul");
// 1
ulList.setAttribute('class', 'pretty');
// 2
const firstLi = ulList.querySelector('li:first-child');
firstLi.setAttribute('class', 'first');
// 3
const lastLi = ulList.querySelector('li:last-child');
lastLi.setAttribute('class', 'last');
// 4
const thirdLi = ulList.querySelector('li:nth-of-type(3)');
thirdLi.setAttribute('class', 'active');
// 5
thirdLi.style.color = "#fff"
// 6
const aList = document.querySelectorAll('li a');
aList.forEach(a => {
    a.setAttribute('title', `Przejdź na stronę ${a.textContent}`);
    // 7
    a.setAttribute('href', '#');
})