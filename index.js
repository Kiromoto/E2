// let x = prompt('Введите данные: ');

// console.log(typeof(+x));
// n = Object.is(+x, NaN)

// if (typeof (+x) === "number" && !n) {
//   if (+x % 2 === 0) {
//     console.log(+x + ' - четное число!')
//   } else {
//     console.log(+x + ' - не четное число!')
//   }
// } else {
//   console.log('Упс, кажется, вы ошиблись!')
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let r = getRandomInt(101)
console.log(r)

let str = "Hello"
let newstr = ``
for (i = 0; i <= str.length; i++) {
    newstr += str[str.length - i]
}

console.log(newstr)