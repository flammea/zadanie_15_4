//zadanie 1

const x = 'Hello';
const y = 'World';
console.log(`Zadanie 1: ${x} ${y}`);

//zadanie 1 - wersja skrócona
const addStrings = (x1='Hello', x2='World') => console.log(`${x1} ${x2}`);
addStrings();

//zadanie 2

const multiply = (a = 1, b = 1) => a * b;
console.log(`Zadanie 2: ${multiply(2,4)}`);


//zadanie 3
const average = (...args) => {
	let sum = 0;
	args.forEach(arg  => {
		sum += arg;
	});
	return (sum/args.length);
};
console.log(`Zadanie 3: ${average(1,2,3,4)}`);


//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`Zadanie 4: ${average(...grades)}`);

//zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;
console.log(`Zadanie 5: The first name is ${firstName} and the last name is ${lastName}.`);
