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
