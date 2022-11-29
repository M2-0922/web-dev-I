## Short historical part of WWW

The World Wide Web (WWW) is a system of interlinked hypertext documents accessed via the Internet. With a web browser, one can view web pages that may contain text, images, videos, and other multimedia and navigate between them via hyperlinks. Hyperlinks connect web pages to one another, either within a single website or between websites. The first web browser was invented in `1990` by `Tim Berners-Lee`, and the first web page was created in 1991. The web browser was released outside of CERN in 1993, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991. The World Wide Web has been central to the development of the Information Age and is the primary tool billions of people use to interact on the Internet.

## HTML vs HTML5

HTML is the standard markup language for creating Web pages.

HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows more diverse and powerful Web sites and applications.

Examples of HTML5 features are:

-   The new elements for structuring a page: `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>`, and so on.
-   The new input types, allowing to create user interfaces far more complex than those based on the traditional input type text.
-   Geolocation, which allows Web pages to access the location of the user.
-   Drag and drop, which simplifies creating advanced interfaces with drag and drop.
-   The video and audio elements, for playing audio and video directly in a Web page.



## Semantic HTML Elements

Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look. Semantic HTML elements clearly describe its meaning to both the browser and the developer.

Why does Semantic HTML matter? Writing semantic HTML makes your code easier to understand, making the source code more readable for other developers. Screen readers and browsers can interpret Semantic HTML better, which makes it more accessible. Semantic HTML is also SEO friendly.

Another example of semantic HTML is the use of the `<article>` element to wrap around blog posts, news articles, or any independent, self-contained content. This element clearly describes the meaning of the content. It is an article.

Another example of semantic HTML is the use of the `<nav>` element to wrap around a navigation section of a webpage. This element clearly describes the meaning of the content. It is a navigation section.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

Another example of semantic HTML is the use of the `<header>` element to wrap around a header section of a webpage. This element clearly describes the meaning of the content. It is a header section.

```html
<header>
  <h1>My Website</h1>
  <p>My website is the best website.</p>
</header>
```
- Article: The `<article>` tag specifies independent, self-contained content.
- Aside: The `<aside>` tag defines some content aside from the content it is placed in (like a sidebar).
- Details: The `<details>` tag specifies additional details that the user can view or hide on demand.
- Footer: The `<footer>` tag defines a footer for a document or section.
- Header: The `<header>` tag defines a header for a document or section.
- Main: The `<main>` element is used to denote the content of a webpage that relates to the central topic of that page or application. It should include content that is unique to that page and should not include content that is duplicated across multiple webpages, such as headers, footers, and primary navigation elements.
- Mark: The `<mark>` tag defines marked/highlighted text.
- Nav: The `<nav>` tag defines a set of navigation links.
- Section: The `<section>` tag defines a section in a document.
- Summary: The `<summary>` tag defines a visible heading for the `<details>` element.

##### Complete sematic html structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <p>My website is the best website.</p>
    </header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <main>
      <article>
        <h2>My Article</h2>
        <p>My article is the best article.</p>
      </article>
    </main>
    <footer>
      <p>My website is the best website.</p>
    </footer>
  </body>
</html>
```

## Block-level Elements

Block-level elements are elements that start on a new line and take up the full width available (stretches out to the left and right as far as it can). Examples of block-level elements are `<div>`, `<h1>`, `<p>`, `<form>`, and `<header>`.
```html
<div>
  <h1>My Website</h1>
  <p>My website is the best website.</p>
</div>
```

## Inline Elements

Inline elements are elements that do not start on a new line and only take up as much width as necessary. Examples of inline elements are `<span>`, `<a>`, `<img>`, and `<input>`.

```html
<span>
  <a href="/">Home</a>
  <img src="logo.png" alt="Logo" />
  <input type="text" />
</span>
```

## Empty Elements

Empty elements are elements that do not have any content. They are usually used as a way to add extra information to certain elements. Examples of empty elements are `<br>`, `<hr>`, `<img>`, and `<input>`.

```html
<br />
<hr />
<img src="logo.png" alt="Logo" />
<input type="text" />
```


## Common HTML Elements

### Paragraphs

The `<p>` tag defines a paragraph.

```html
<p>This is a paragraph.</p>
```

-Contenteditable: The contenteditable attribute specifies whether the content of an element is editable or not.

```html
<p contenteditable="true">This is a paragraph.</p>
```

### Input Element

The `<input>` element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.

```html
<input type="text" name="username" />
```

Types of input elements:

-   `text`: A single-line text field.
-   `password`: A single-line text field whose value is obscured.
-   `checkbox`: A checkable input (i.e., a checkbox).
-   `radio`: A checkable input (i.e., a radio button).
-   `submit`: A button that submits the form data to the server.
-   `reset`: A button that resets all the controls to their initial values.
-   `button`: A push button with no default behavior.
-   `email`: A field for editing an e-mail address.
-   `number`: A field for entering a number.
-   `range`: A control for entering a number whose exact value is not important (like a slider control).
-   `search`: A single-line text field for entering a search string.
-   `tel`: A field for entering a telephone number.
-   `url`: A field for entering a URL.

Onblur: The onblur attribute fires the moment that an element loses focus.

```html
<input type="text" name="username" onblur="checkUsername()" />

<script>
  function checkUsername() {
    var username = document.getElementsByName("username")[0].value;
    if (username.length < 5) {
      alert("Username must be at least 5 characters");
    }
  }
</script>
```

Onfocus: The onfocus attribute fires the moment that an element gets focus.

```html
<input type="text" name="username" onfocus="checkUsername()" />

<script>
  function checkUsername() {
    var username = document.getElementsByName("username")[0].value;
    if (username.length < 5) {
      alert("Username must be at least 5 characters");
    }
  }
</script>

```

### Textarea Element

The `<textarea>` element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

```html
<textarea name="message" rows="10" cols="30">
  The cat was playing in the garden.
</textarea>
```

### Select Element

The `<select>` element represents a control that provides a menu of options:

```html
<select name="color">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
```

### Checkbox Element

The `<input>` element with a type attribute whose value is `checkbox` represents a checkable input, i.e. a checkbox.

```html
<input type="checkbox" name="vehicle1" value="Bike" /> I have a bike<br />
<input type="checkbox" name="vehicle2" value="Car" /> I have a car<br />
<input type="checkbox" name="vehicle3" value="Boat" /> I have a boat<br />
```

### List Element

The `<ul>` element represents an unordered list of items, typically rendered as a bulleted list.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

The `<ol>` element represents an ordered list of items, typically rendered as a numbered list.

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

### Table Element

The `<table>` element represents tabular data — that is, information expressed via a two-dimensional table comprised of rows and columns of cells containing data.

cellpadding: Specifies the space between the cell wall and its content.

```html
<table cellpadding>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

### Link Element

The `<a>` element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```html
<a href="https://www.ciccc.ca">Visit W3Schools.com!</a>
```

The target attribute specifies where to open the linked document.

```html
<a href="https://www.ciccc.ca" target="_blank">Visit W3Schools.com!</a>
```

Target values:

-   `_blank`: Opens the linked document in a new window or tab
-   `_self`: Opens the linked document in the same frame as it was clicked (this is default)



## Some other elements

### Meter

The `<meter>` tag defines a scalar measurement within a known range, or a fractional value.

```html
<meter value="2" min="0" max="10">2 out of 10</meter>
```

### Canvas

The `<canvas>` tag is used to draw graphics, on the fly, via scripting (usually JavaScript).

The `<canvas>` element is only a container for graphics. You must use a script to actually draw the graphics.


```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```html
<script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
</script>
```

### Iframe

The `<iframe>` tag defines an inline frame.

An inline frame is used to embed another document within the current HTML document.

```html
<iframe src="https://www.ciccc.ca"></iframe>
```

### Audio

The `<audio>` tag defines sound, such as music or other audio streams.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### Video

The `<video>` tag defines a video, such as a movie clip or other video streams.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```
### SVG (Scalable Vector Graphics)

The `<svg>` tag defines a container for SVG graphics.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

### Em, Strong, Small, Sub, Sup

The `<em>` tag defines emphasized text.

The `<strong>` tag defines important text.

The `<small>` tag defines smaller text.

The `<sub>` tag defines subscripted text.

The `<sup>` tag defines superscripted text.

```html
<p>My cat is <em>very</em> cute.</p>
<p>My cat is <strong>very</strong> cute.</p>
<p>My cat is <small>very</small> cute.</p>
<p>My cat is <sub>very</sub> cute.</p>
<p>My cat is <sup>very</sup> cute.</p>
```

### Good to know WORDS

`FTP`: File Transfer Protocol
`SSH`: Secure Shell
`HTTP`: Hypertext Transfer Protocol
`HTTPS`: Hypertext Transfer Protocol Secure
`DNS`: Domain Name System
`IP`: Internet Protocol
`TCP`: Transmission Control Protocol



