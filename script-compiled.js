'use strict';

//zadanie 1

var x = 'Hello';
var y = 'World';
console.log('Zadanie 1: ' + x + ' ' + y);

//zadanie 1 - wersja skrócona
var addStrings = function addStrings() {
	var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var x2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
	return console.log(x1 + ' ' + x2);
};
addStrings();

//zadanie 2

var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log('Zadanie 2: ' + multiply(2, 4));

//zadanie 3
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return sum / args.length;
};
console.log('Zadanie 3: ' + average(1, 2, 3, 4));

//zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('Zadanie 4: ' + average.apply(undefined, grades));

//zadanie 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log('Zadanie 5: The first name is ' + firstName + ' and the last name is ' + lastName + '.');
