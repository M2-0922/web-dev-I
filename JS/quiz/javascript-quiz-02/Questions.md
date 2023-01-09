###### Question 1: What's the output?

```js
function greeting() {
console.log(name);
console.log(age);
var name = "Hana";
let age = 21;
}

greeting();
// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Ans:
// Short explanation:
```
###### Question 2: What's the output?

```js
+true;
!"Lydia";

// A: 1 and false
// B: false and NaN
// C: false and false

// Ans:
// Short explanation:
```
###### Question 3: What's the output?

```js
function sum(a, b) {
return a + b;
}

sum(1, "2");

// A: NaN
// B: TypeError
// C: "12"
// D: 3

// Ans:
// Short explanation:
```
###### Question 4: What's the output?

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// Ans:
// Short explanation:
```

###### Question 5: What's the output?

```js
!!null;
!!"";
!!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

// Ans:
// Short explanation:

```
###### Question 6: What's the output?

```js
console.log(3 + 4 + "5");

// A: "345"
// B: "75"
// C: 12
// D: "12"

// Ans:
// Short explanation:
```
###### Question 7: What's the value of num?

```js
const num = parseInt("7*6", 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

// Ans:
// Short explanation:
```

###### Question 8:

Write a function indexOfIgnoreCase taking two strings
and determining the first occurrence of the second
string in the first string. The function should be
case insensitive.

Example: indexOfIgnoreCase('bit','it') and
indexOfIgnoreCase('bit','IT') should return 1.

```js
//Hint
function indexOfIgnoreCase(s1, s2) {
// Change s1 and s2
// first to lowercase.
// Then use the
// indexOf method.
}

```

###### Question 9:
Write a function firstChar, which returns the
first character that is not a space when a string
is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

```js
//Hint:
function firstChar(text) {
// Trim first.
// Then use the
// charAt method.
}
```

###### Question 10:
Write a function normalize, that replaces '-'
with '/' in a date string.

Example: normalize('20-05-2017') should return
'20/05/2017'.
