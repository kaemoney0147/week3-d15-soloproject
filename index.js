let x = 'John';
let y = 'Doe';
let sum = x + '' + y;
console.log(sum);
//21//
let StudentIfo = {
    firstName: 'Victor',
    surName: 'orjiako',
    Email: 'victororjiako@gmail.com'
}
console.log('this is victor info:', StudentIfo)
//22
delete StudentIfo.Email
console.log(StudentIfo)
//23
let strArry = ['apple', 'orange', 'banana', 'grape', 'france', 'pears', 'berries', 'citrus', 'mandarins ', 'limes']
console.log(strArry);
//24/25
let numArry = [];
for (let i = 0; i < 100; i++) {
    numArry.push(Math.floor(Math.random() * 100))
}
console.log(numArry)
//26

const minAndMax = function () {
    const min = Math.min(...numArry)
    console.log("The minimum value is " + min)
    const max = Math.max(...numArry)
    console.log("The maximum value is " + max)
}
console.log(minAndMax())
//Exercise 28

let newArry = []
for (let i = 0; i < 4; i++) {
    let current = []
    for (let k = 0; k < 10; k++) {
        current.push(Math.floor(Math.random() * 10))
    }
    newArry.push(current)
}
console.log(newArry)

//Exercise 31

const getElement = document.getElementById("container")

console.log(getElement)

//Exercise 32

const getAllTd = document.getElementsByTagName("td")

console.log(getAllTd)

//Exercise 33

const printTd = function () {
    for (let i = 0; i < getAllTd.length; i++) {
        getAllTd[i].innerText
    }
}
    (printTd())

//Exercise 34

const changeH1 = function (input) {
    const h1 = document.getElementById("type")
    h1.innerText = input
}
changeH1()

//Exercise 35

const extraRow = function () {
    const newRowTable = document.getElementById("table1")
    const addERow = document.createElement("tr")
    addERow.innerText = "new row"
    newRowTable.appendChild(addERow)
    console.log(newRowTable)
}
extraRow()

//Exercise 36

const addClass = function () {
    const tableRow = document.querySelectorAll("tr")
    for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].classList.add("still learning")
    }
}
console.log(addClass())

//Exercise 37

const addRedBackground = function () {
    const links = document.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "red"
    }
}
addRedBackground()
//Exercise 38

window.onload = function () { }

//Exercise 39
const addNewListItems = function () {
    const list = document.querySelector("ul")
    const newItem = document.createElement("li")
    newItem.innerText = "This list item was created using JS"
    newItem.style.color = "red"
    list.appendChild(newItem)
}

//Exercise 40
const deleteList = function () {
    const list = document.querySelector("ol")
    console.log(list)
    list.innerHtml = '';
}