/*
Za pomocą JS stwórz nowy element, który będzie miał:

- wymiary 300px x 300px
- losowy kolor tła
- wyświetlanie typu inline-flex
- zaokrąglenie rogów o wielkości 5px
- wycentrowany tekst na środku "Element nr ...." który wyliczysz
- font powinien być sans-serif

Po stworzeniu elementu dodaj go do body

Powyższe czynności spróbuj zrobić w intervale ustawionym na 1000ms.
*/
let counter = 1;
const start = setInterval(function () {
    const div = document.createElement('div');
    // 1
    div.style.width = "300px";
    div.style.height = '300px';

    // 2
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // 3
    div.style.display = "inline-flex"

    // 4
    div.style.borderRadius = "5px"

    // 5
    const p = document.createElement('p');
    p.style.width = "100%";
    p.style.textAlign = "center";
    div.style.alignItems = "center"
    const text = document.createTextNode(`Element nr ${counter++}`);
    p.appendChild(text);
    div.appendChild(p);

    // 6
    p.style.fontFamily = "sans-serif"

    // Add to body
    const body = document.querySelector('body');
    body.appendChild(div)
}, 1000)