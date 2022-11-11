// Задание 1.
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


// Задание 3.
// let str = "Hello"
// let newstr = ``
// for (i = 0; i <= str.length; i++) {
//     newstr += str[str.length - i]
// }
// console.log(newstr)


// Задание 4.
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// let r = getRandomInt(101)
// console.log(r)


// Задание 5.
// const arr = [2, 67, 89, 23]
// console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// Задание 6.
// const arr = [2, 67, 89, 23, 91, 12, 67, 23]
// const arr = [2, 67, 89, 23, 91, 12]
// const arr = [2, 2, 2, 2, 2, 1]
// allTheSame = true
// areTheSame = false
//
// for (let i = 0; i < arr.length; i++) {
//     if (!areTheSame) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (!areTheSame && arr[i] === arr[j]) {
//                 areTheSame = true;
//                 break;
//             }
//         }
//     }
//     else {break}
// }
//
// let i = 1;
// while (allTheSame && i < arr.length) {
//     allTheSame = arr[i - 1] === arr[i] ? true : false
//     i++
// }
//
// if (areTheSame) {
//     console.log('Есть одинаковые элементы!')
// }
// else {
//     console.log('Одинаковых элементов нет!')
// }
//
// if (allTheSame) {
//     console.log('Все элементы одинаковые!')
// }
// else {
//     console.log('Не все элементы одинаковые!')
// }

// Задание 7.
const arr = [2, 67, 89, 23, 91, 12, 67, 23, 7, 11, 786, 1987656, 0, '', 0, true, false]
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
for (i = 0; i < arr.length; i++) {
    if (Number.isFinite(arr[i])) {
        if (arr[i] * 1 === 0) {zeroCount += 1}
        else if (arr[i] % 2 === 0) {evenCount++}
        else if (arr[i] % 2 === 1) {oddCount++};
    }
}

if (zeroCount) {console.log(`Количетво нулей в массиве равно = ${zeroCount}`)}
console.log(`Количетво четных чисел в массиве равно = ${evenCount}`)
console.log(`Количетво нечетных чисел в массиве равно = ${oddCount}`)
