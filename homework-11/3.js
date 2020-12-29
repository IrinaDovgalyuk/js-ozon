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