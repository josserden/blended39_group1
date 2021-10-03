// function first() {
//     console.log(1);
// }

// function second() {
//     console.log(2);
// }

// function first() {
//     // Имитация запроса к API

//     setTimeout(function () {
//         console.log(1);
//     }, 3000);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function guest() {
//     let name = 'Mango';

//     return function displayName() {
//         console.log(name);
//     };
// }

// guest();

// let mango = guest();
// mango();

// function getCounter() {
//     let counter = 0;

//     return function () {
//         return (counter += 1);
//     };
// }

// const count = getCounter();
// const count2 = getCounter();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count2());
// console.log(count2());
// console.log(count2());
// console.log(count2());

/*
 * Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке.Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число.
 */

// Пример кода:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']

// const sortArr = arr => {
//     return arr
//         .reduce((acc, el) => {
//             typeof el === 'string' ? acc.push(el) : acc.unshift(el);
//             return acc;
//         }, [])
//         .sort((a, b) =>
//             typeof a === 'string' && typeof b === 'string'
//                 ? a.localeCompare(b)
//                 : a - b,
//         );
// };

// console.log(sortArr(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

const arr = [
    12,
    [34, [2, [33]]],
    34,
    [23],
    'hello',
    ['five', ['some arr', ['last arr'], { name: 'John' }]],
];

const getFlat = arr => {
    let res = [];

    arr.forEach(element => {
        Array.isArray(element)
            ? (res = [...res, ...getFlat(element)])
            : res.push(element);
    });

    return res;
};

console.log(
    getFlat([
        12,
        [34, [2, [33]]],
        34,
        [23],
        'hello',
        ['five', ['some arr', ['last arr'], { name: 'John' }]],
    ]),
);
