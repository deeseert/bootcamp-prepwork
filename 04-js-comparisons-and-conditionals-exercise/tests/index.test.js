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

// 5. Declare a variable named `fruits` and assign it to an array containing three strings: "banana", "cherry", and "watermelon".
// const fruits = ["banana", "cherry", "watermelon"];

// let fruits;
// if (sortOrder === "ALPHABETICAL") {
//     fruits = 'banana, cherry, watermelon';
// } else {
//     fruits = 'watermelon, cherry, banana';
// }

const fruits = sortOrder === "ALPHABETICAL" && "banana, cherry, watermelon";

describe("coerced equality: ==", () => {
  test("targetMatchesCoercedUserValue is true", () => {
    expect(targetMatchesCoercedUserValue).toBeDefined();
    expect(targetMatchesCoercedUserValue).toBe(true);
  });
});

describe("strict equality: ===", () => {
  test("targetMatchesUserValue is false", () => {
    expect(targetMatchesUserValue).toBeDefined();
    expect(targetMatchesUserValue).toBe(false);
  });
  test("passwordMatchesConfirmation is false", () => {
    expect(passwordMatchesConfirmation).toBeDefined();
    expect(passwordMatchesConfirmation).toBe(false);
  });
});

describe("if statements", () => {
  test('passwordMessage is "Oops, your password and confirmation do not match!"', () => {
    expect(passwordMessage).toBeDefined();
    expect(passwordMessage).toBe(
      "Oops, your password and confirmation do not match!"
    );
  });
  test('fruits is "banana, cherry, watermelon" because sortOrder is "ALPHABETICAL"', () => {
    expect(fruits).toBeDefined();
    expect(fruits).toBe("banana, cherry, watermelon");
  });
});
