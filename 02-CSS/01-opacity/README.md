# Opacity & Alpha Channel

## Opacity

Opacity is a CSS property that allows you to set the transparency of an element. It is a value between 0 and 1, where 0 is completely transparent and 1 is completely opaque.

```css
div {
  opacity: 0.5;
}
```

## Alpha Channel

The alpha channel is a value between 0 and 1 that represents the opacity of a color. It is used in RGBA and HSLA colors.

```css
div {
  background-color: rgba(255, 0, 0, 0.5);
}
```

# Pseudo Classes

Pseudo classes are special keywords added to selectors that specify a special state of the selected element(s).

```css
a:hover {
  color: red;
}
a:visited {
  color: purple;
}
a:active {
  color: green;
}
a:focus {
  color: blue;
}
a:link {
  color: black;
}
a:target {
  color: orange;
}
```

## Pseudo Elements

Pseudo elements are keywords added to selectors that let you style a specific part of the selected element(s).

```css
p::first-letter {
  font-size: 2em;
}
p::first-line {
  font-weight: bold;
}
p::selection {
  background-color: yellow;
}
p::before {
  content: "Before";
}
p::after {
  content: "After";
}
p::marker {
  color: red;
}
p::placeholder {
  color: red;
}
```

# Positioning

Positioning is a CSS property that allows you to position an element in relation to its parent element.

```css
div {
  position: static; : /*default*/
  position: relative; : /*relative to its normal position*/
  position: absolute; : /*relative to the nearest positioned ancestor*/
  position: fixed; : /*relative to the viewport*/
  position: sticky; : /*relative to the viewport*/
}
```

# Transition

Transition is a CSS property that allows you to change property values smoothly, over a given duration.

```css
div {
  transition: property duration timing-function delay;
}

/* property: background-color;
duration: 2s;
timing-function: ease-in-out;
delay: 1s; */
```

# Transform

Transform is a CSS property that allows you to rotate, scale, skew, or translate an element.

```css
div {
  transform: rotate(20deg);
  transform: scale(1.5);
  transform: skew(20deg);
  transform: translate(50px, 100px);
  transform: matrix(1, 2, 3, 4, 5, 6);
}
```

# Specificity

Specificity is a way to determine which CSS rule applies to an element. It is calculated by adding up the specificity of each selector in the rule.

Order of specificity:

Orders are important. If two rules have the same specificity, the latter rule will be applied.
Rules are applied from top to bottom.

* ID > Class > Element

1. Inline styles
2. IDs
3. Classes, attributes, and pseudo-classes
4. Elements and pseudo-elements

```css
/* 0, 0, 0, 1 */
div {
  color: red;
}

/* 0, 0, 1, 0 */
div.class {
  color: red;
}

/* 0, 1, 0, 0 */
#id {
  color: red;
}

/* 1, 0, 0, 0 */
div#id {
  color: red;
}

/* 0, 0, 1, 1 */
div.class:hover {
  color: red;
}

/* 0, 1, 0, 1 */
#id:hover {
  color: red;
}

/* 1, 0, 0, 1 */
div#id:hover {
  color: red;
}
```
