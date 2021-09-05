// const string = 'ldjgf';
// const string = '4';

// console.log(string);
// console.log(typeof string);

// let string;

// console.log(string);

// const number = 4

// console.log(typeof 454652398511548952489545887469n);

// console.log(typeof null);

// console.log(typeof {});

// console.log(typeof function name() {});

/*
 * - Строковое;
 * - Булевое;
 * - Численное;
 */

// todo приведение к строке
// * Явное

// const number = 123;
// const string = String(number);

// console.log(typeof number);
// console.log(typeof string);

// console.log(String(true));
// console.log(String(false));
// console.log(String(undefined));
// console.log(String(null));

// * Неявное

// console.log('5' + 5);
// console.log('true' + 5 + 5);
// console.log(5 + 5 + 'true');
// console.log(5 + 'true' + 5);
// console.log(123 + '');

// todo Булевое преобразование
// * Явное
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function () {}));
// console.log(Boolean(-5));

// * Неявное
// console.log(!true);
// console.log(!!true);
// console.log(false || true);
// console.log(false && true);
// console.log(1 && 20); // => (true true);

// const name = '';

// if (name) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (!name) {
//     console.log('Enter your name!');
// } else {
//     console.log(`Hello,${name}`);
// }

// if (!name) {
//     console.log('Enter your name!');
// }

// if (name) {
//     console.log(`Hello,${name}`);
// }

// todo Булевое преобразование
// * Явное
// console.log(Number('123'));
// console.log(Number('string123'));
// console.log(Number('123string'));
// console.log(Number(''));
// console.log(Number(' '));

// console.log('string123' === '123string');
// console.log('string123' == '123string');

// * Неявное
/*
- ( >, <, <=, >=)
- (|, &, ^, ~)
- (-, +, *, /, %)
- ( ==, !=)
- (+)


*/

// console.log('5' >= 5);
// console.log('5' <= 5);
// console.log('5' - 5);
// console.log('5' / 5);
// console.log('5' * 5);

// let x = 4;

// console.log(x + 1); // '41'

// let y = '4';

// console.log(++y); // 5

const z = 4;

console.log(z++);
// console.log((z += 1)); // => z = z+1
// console.log(++z);
