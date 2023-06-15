const target = 15;
const userValue = "15";

const password = "JSisKool888";
const passwordConfirmation = "JSisCool888";

const sortOrder = "ALPHABETICAL";

// ADD YOUR CODE BELOW

// 1. Declare a variable named `targetMatchesCoercedUserValue` and assign it to a comparison between `target` and `userValue` using the loose equality operator.
const targetMatchesCoercedUserValue = target == userValue;

// 2. Declare a variable named `targetMatchesUserValue` and assign it to a comparison between `target` and `userValue` using the strict equality operator.
const targetMatchesUserValue = target === userValue;

// 3. Declare a variable named `passwordMatchesConfirmation` and assign it to a comparison between `password` and `passwordConfirmation` using the strict equality operator.
const passwordMatchesConfirmation = password === passwordConfirmation;

// 4. Declare a variable named `passwordMessage` and assign it to a ternary expression that checks whether `passwordMatchesConfirmation` is true.
// If it is, assign `null` to `passwordMessage`; otherwise assign the string "Oops, your password and confirmation do not match!" to `passwordMessage`.
const passwordMessage = passwordMatchesConfirmation ? null : "Oops, your password and confirmation do not match!";

// 5. Declare a variable named `fruits` and assign it to a ternary expression that checks whether `sortOrder` is equal to "ALPHABETICAL".
const fruits = sortOrder === "ALPHABETICAL" && "banana, cherry, watermelon";
