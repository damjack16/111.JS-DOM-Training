// 1
const attemptList = document.querySelectorAll('.first-attempt');
attemptList.forEach(attempt => {
    attempt.classList.add('active');
})

// 2
const dataBorders = document.querySelectorAll('[data-border]');
for (const border of dataBorders) {
    border.dataset.elActive = "";
}

// 3
const hacks = document.querySelectorAll('.hack');
for (const hack of hacks) {
    hack.title = "hacking";
}

// 4
const hijacks = document.querySelectorAll('.hijack');
for (const hijack of hijacks) {
    hijack.removeAttribute("title");
}

// 5
const elements = document.querySelectorAll('.st1.st2');
for (const element of elements) {
    element.style.color = "red";
    element.style.fontSize = "15px";
}

// 6
const deletes = document.querySelectorAll('.del:not(.hijack');
for (const del of deletes) {
    del.removeAttribute('data-hack-inactive');
    del.dataset.hackActive = "";
}

// 7
const lastAttempts = document.querySelectorAll('.last-attempt');
for (const attempt of lastAttempts) {
    attempt.firstElementChild.style.visibility = 'hidden';
}