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