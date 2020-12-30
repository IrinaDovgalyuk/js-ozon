//fizz buzz

function fizzBuzz() {

	for (let i = 1; i <= 30; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizz buzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}
console.log('Первое задание:');
fizzBuzz();


// Вывод простых чисел до n
let n = prompt('Введите любое число. Желательно не миллион :P');

function findAllPrimes(n) {
	metka:
	for (let i = 2; i <= n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue metka;
		}
		console.log(i + ' простое число');
	}
}
console.log('Второе задание:');
findAllPrimes(n);