function HTMLinfo(selector) {
    this.elements = document.querySelectorAll(`${selector}`);

    this.showElements = function () {
        console.log(this.elements)
    }
    this.showTags = function () {
        this.elements.forEach(element => {
            console.log(element.tagName)
        })
    }
    this.showCount = function () {
        console.log(this.elements.length)
    }

    this.showClass = function () {
        this.elements.forEach(element => {
            console.log(element.getAttribute('class'))
        })
    }
    this.showHTML = function () {
        this.elements.forEach(element => {
            console.log(element.outerHTML)
        })
    }

    this.showData = function () {
        this.elements.forEach(element => {
            console.log(element.dataset)
        })
    }
}

const example = new HTMLinfo(".test *")
example.showElements();
example.showTags();
example.showCount();
example.showClass();
example.showHTML();
example.showData();