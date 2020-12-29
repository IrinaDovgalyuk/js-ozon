// первая часть

const word = prompt('Напишите любое слово');
/*const word = document.querySelector('.inputWord');
const buttonWord = document.querySelector('.buttonWord');
*/

function checkLength(word) {
	// переданный аргумент word - переменная
	//	let wordLeng = word.length
	//const myWord = string(word);
	if (word.length < 10) {
		console.log('Ваше слово идеально!');
		alert('Ваше слово идеально!');
	} else {
		console.log('Ваше слово слишком длинное!');
		alert('Ваше слово слишком длинное!');
	}
}
checkLength(word);
//buttonWord.addEventListener('click', checkLength);


// вторая часть
const string1 = prompt('Напишите первое слово');
const string2 = prompt('Напишите второе слово');

function concatTwoStrings(string1, string2) {
	let string3 = `${string1} ${string2}`;
	if (string3.length >= 20) {
		string3 = string3.substring(0, 20) + '...';
		return string3;
	} else {
		return string3;
	}

}
let newString = concatTwoStrings(string1, string2);
alert(newString);