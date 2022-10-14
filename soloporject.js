let x = 'John';
let y = 'Doe';
console.log(x, y)
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

const maxMixArry = function () {
    const max = Math.max(...numArry);
    const min = Math.min(...numArry)
    console('this is a max number:' + max)
    console('this is a max number:' + min)
}
console.log(maxMixArry())
//

let arrofArrys = [];
let m = 4;
for (var i = 0; i < m; i++) {
    arrofArrys[i] = [];
}
console.log(arrofArrys);

const divContainer = document.getElementById('container');
console.log(divContainer);
const allTd = document.getElementsByTagName('td')
console.log(allTd)
//
const printword = function () {
    const Td = document.getElementsByTagName('td')
    for (i = 0; i < Td.length; i++) {
        console.log(Td[i].innerText)
    }
}
//
const changeH1Text = function (name) {
    const newName = document.getElementById('type');
    newName.innerText = name;
    console.log(changeH1Text)
}
//
const addExtratRow = function () {
    const table = document.getElementsByTagName('table');
    const newTr = document.createElement('tr')
    table.appendChild(tr)
    console.log(addExtratRow)
}
//
const addNewitem = function () {
    const mine = document.getElementsByTagName('ol')


}
