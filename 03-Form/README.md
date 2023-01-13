# HTML FORM & CSS

## HTML FORM

### Form

- Form is a collection of input elements
- Form is used to collect user input
- Form is used to send data to the server

### Form Attributes

- action: The URL to which the form data will be sent when the form is submitted
- method: The HTTP method to use when sending form data
- name: The name of the form
- target: The target of the form

### Form Elements

- input
- textarea
- select
- button

### Input Types

- text
- password
- radio
- checkbox
- submit
- reset
- button
- file
- image

### Input Attributes

- name: The name of the input
- value: The value of the input
- type: The type of the input
- placeholder: The placeholder of the input
- checked: The checked status of the input
- disabled: The disabled status of the input
- readonly: The readonly status of the input
- required: The required status of the input
- autofocus: The autofocus status of the input


## CSS

### CSS Syntax

- CSS rule consists of a selector and a declaration block
- A selector points to the HTML element you want to style
- A declaration block contains one or more declarations separated by semicolons
- Each declaration includes a CSS property name and a value, separated by a colon
- Multiple CSS rules are separated by semicolons

### CSS Selectors

Note: *** 

Using `␣/space` in the selector…

The ␣ combinator (that's meant to represent a space, or more properly one or more whitespace characters) combines two selectors such that the combined selector matches only those elements matching the second selector for which there is an ancestor element matching the first selector. Descendant selectors are similar to child selectors, but they do not require that the relationship between matched elements be strictly parent-child.

```html
<div class="welcome">
    <section>
        <div>This will be selected</div>
    </section>
    <div>This will be selected as well</div>
</div>
```
So here, the selector having space will target the div at any nested level of the parent element.

```css
.welcome div {
    font-size: 20px;
    color: #f00;
}
```

using `>` in the selector…

The > combinator separates two selectors and matches only those elements matched by the second selector that are direct children of elements matched by the first. By contrast, when two selectors are combined with the descendant selector, the combined selector expression matches those elements matched by the second selector for which there exists an ancestor element matched by the first selector, regardless of the number of "hops" up the DOM.

```html
<div class="welcome">
    <section>
        <div>This won't be selected</div>
    </section>
    <div>This will be selected</div>
</div>
```

Whereas here, the selector will target your div which is a child of the element having .welcome but it won't select the div which is nested inside section tag as it is a grandchild (but not a child) of the outer div.

```css
.welcome > div {
    font-size: 20px;
    color: #f00;
}
```

- Universal selector: *
- Type selector: h1, h2, h3
- Class selector: .class-name
- ID selector: #id-name
- Attribute selector: [attribute]
- Pseudo-class selector: :hover, :active, :focus
- Descendant selector is used to select all elements that are descendants of a specified element.
`p a { color: red; }`
- Child selector is used to select all elements that are children of a specified element. 
`p > a { color: red; }`
- Adjacent sibling selector is used to select all elements that are the adjacent siblings of a specified element. 
`h1 + p { color: red; }`
- General sibling selector is used to select all elements that are siblings of a specified element. 
`h1 ~ p { color: red; }`

### CSS Properties

- color
- background-color
- font-size
- font-weight
- font-style
- font-family
- text-align
- text-decoration
- text-transform
- line-height
- letter-spacing
- word-spacing
- width
- height
- padding
- border
- border-radius
- box-shadow
- display

### CSS Units

- px: pixels
- em: relative to the font-size of the element
- rem: relative to the root element
- %: relative to the parent element

### CSS Colors

- color names: red, green, blue
- hex: #ff0000, #00ff00, #0000ff

### CSS Box Model

- Content: The content of the box, where text and images appear
- Padding: Clears an area around the content. The padding is transparent
- Border: A border that goes around the padding and content
- Margin: Clears an area outside the border. The margin is transparent

### CSS Display

- block: The element generates a block element box
- inline: The element generates one or more inline element boxes
- inline-block: The element generates one or more inline-level boxes that flow like text
- none: The element does not generate any boxes
