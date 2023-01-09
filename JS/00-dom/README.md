The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like structure, with the document's elements and attributes as nodes in the tree. The DOM allows developers to programmatically manipulate the content and structure of a document, as well as respond to events such as user input. This makes it an important tool for building interactive web applications.

Changing the content of an element:

```js
const element = document.getElementById('my-element');
element.innerHTML = 'New content';
```

Changing the style of an element:

```js
const element = document.getElementById('my-element');
element.style.color = 'red';
element.style.fontSize = '20px';
```

Adding a new element to a document:

```js
const parentElement = document.getElementById('my-parent');
const newElement = document.createElement('div');
newElement.innerHTML = 'I am a new element';
parentElement.appendChild(newElement);
```

Responding to a user event (e.g. a button click):

```js
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  console.log('Button was clicked');
});
```

These are just a few examples of what can be done with the DOM. There are many more possibilities.