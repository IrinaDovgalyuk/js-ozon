//1 задание. Преобразование строки

let word = prompt('Напишите любое слово');

function reverseStr(str) {
	return str.split("").reverse().join("");
}

alert(reverseStr(word));


//2 задание. Напишите реализацию алгоритма ROT-13 https://ru.wikipedia.org/wiki/ROT13 только для английского алфавита.

const rigthString = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const rotateString = ' NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
let youString = prompt('Напишите любую фразу латиницей');

function rot13(str) {
	//str=str.split('');
	let resultString = '';
	for (let i = 0; i < str.length; i++) {
		let j = rigthString.indexOf(str[i]);
		resultString += rotateString[j];
	}
	return resultString;
	//return str;
}
alert(rot13(youString));


//3 задание. Напишите функцию, генерирующую двумерный массив. Количество вложенных масивов от 1 до arraysCount, и с числами внутри этих массивов от 1 до numbersCount.

let numbersCount = prompt('Напишите сколько ячеек в массиве хотите видеть');
//numbersCount = parseInt(numbersCount); нужно ли делать приведение типов в данном случае? запуталась, оно и без этого работает.
let arraysCount = prompt('Напишите сколько строк в массиве хотите видеть');

function generate(numbersCount, arraysCount) {
	let myArr = [];
	for (let i = 0; i < arraysCount; i++) {
		myArr.push([]);
		myArr[i].push(new Array(arraysCount));
		for (let j = 0; j < numbersCount; j++) {
			myArr[i][j] = j + 1;
		}
	}
	return myArr;
}
console.log(generate(numbersCount, arraysCount));
