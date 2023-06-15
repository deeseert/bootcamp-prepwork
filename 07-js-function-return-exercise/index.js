/**
 * Exercise 1
 *
 * Create a function `greet` which takes your name as a parameter
 * and return "Hello 'your_name'!"
 */

const greet = (name) => `Hello ${name}!`;

/**
 * Exercise 2
 *
 * Create a function `loginValidation` which takes age(number)
 * and returns "Welcome!" if the age is 18+ and "Sorry, not allowed."
 * if the age is less than 18
 */

const loginValidation = (age) => {
	if (age < 18) {
		return 'Sorry, not allowed.';
	}

	return 'Welcome!';
};

/**
 * Exercise 3
 *
 * Create a function `minNumber` which takes 2 numbers as params
 * and return the least one.
 */

const minNumber = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    }

    return num2;
};

/**
 * Exercise 4
 *
 * Create a function `randomNumber` which returns an integer between
 * 1 and 10, fraction should be rounded to lower integer
 */

const randomNumber = () => Math.floor(Math.random() * 10) + 1;

/**
 * Exercise 5
 *
 * Create a function `getOppositeNumber` that takes a number as a param and
 * returns an opposite number
 */

const getOppositeNumber = (num) => -num;
