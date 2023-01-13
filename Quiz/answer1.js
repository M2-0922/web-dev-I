//Question 1:
//Which value does x have after execution of the following code?
let x = "Pooh";
let y = "Tigger";
let z = y;
y = x;
x = z;
// console.log(x); //Tiger

////////////////////////////////////////////////////////////////

// Question 2:
// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.
// Example: secondIndexOf('White Rabbit', 'it') should return 10.
function secondIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex + 1);
}
// console.log(secondIndexOf("White Rabbit", "it")); // 10

////////////////////////////////////////////////////////////////

// Question 3:
// Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
// Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
function equals(a, b) {
  return a === b ? "EQUAL" : "UNEQUAL";
}
// console.log(equals(1, 1)); // EQUAL
// console.log(equals(1, 2)); // UNEQUAL

////////////////////////////////////////////////////////////////

// Question 4:
// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", otherwise output "Too young".
function checkAge(age) {
  if (age > 18) return "Old enough";
  else return "Too young";
}
// console.log(checkAge(20));
// console.log(checkAge(10));

////////////////////////////////////////////////////////////////

// Question 5:
// Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.
// Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

//1
function repdigit(n) {
  // Calculate the ones digit of n with modulo 10.
  // Calculate the tens digit of n by dividing by 10 and rounding down.
  let tensDigit = Math.trunc(n / 10);
  let onesDigit = n - tensDigit * 10;
  // Compare ones and tens digits.
  return tensDigit === onesDigit ? "Repdigit!" : "Not Repdigit";
}
// console.log(repdigit(22));
// console.log(repdigit(23));

//2
function repdigit2(n) {
  if (n >= 10 && String(n).split("")[0] === String(n).split("")[1] && n < 100) {
    return "Repdigit!";
  } else {
    return "No Repdigit!";
  }
}
// console.log(repdigit2(22));
// console.log(repdigit2(23));

////////////////////////////////////////////////////////////////

// Question 6:
// Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.
// Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.
function unequal(a, b, c) {
  return a !== b && a !== c && b !== c;
}
// console.log(unequal(1, 2, 3));
// console.log(unequal(1, 1, 2));
// console.log(unequal(1, 1, 1));

////////////////////////////////////////////////////////////////

// Question 7:
// Which of these alerts are going to execute? // first, third
// What will the results of the expressions be inside if(...)? // -1 0 1
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");

////////////////////////////////////////////////////////////////

// Question 8:
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”, Another string – show “Wrong password”, For an empty string or cancelled input, show “Canceled”
// Refer to the schema below:

let admin = prompt("Enter 'Admin'", "");

if (admin === "Admin") {
  let password = prompt("Enter password", "");

  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Cancelled");
  } else {
    alert("Wrong passwoed");
  }
} else if (admin === "" || admin === null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
