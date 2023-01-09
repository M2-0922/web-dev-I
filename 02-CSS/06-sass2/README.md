First, create a new project folder and navigate to it in your terminal.

Initialize a new npm project by running npm init -y. This will create a package.json file in your project folder.

Install the dependencies that you will need for your project, including node-sass for compiling Sass, and live-server for running a local development server:

```bash
npm install --save-dev node-sass live-server
```

Create a src folder in your project, and within it, create a sass folder and a css folder.

In the sass folder, create a main.scss file. This will be your main Sass file, where you will define your variables, mixins, and other styles.

At the top of the main.scss file, define some variables for colors, font sizes, and other design properties that you want to use throughout your project:

```scss
$primary-color: #333;
$secondary-color: #f0f0f0;
$font-size-base: 16px;
```
Create some mixins in the main.scss file that you can use to apply common styles, such as a responsive grid layout or media queries for different screen sizes:

```scss
@mixin responsive-grid {
  display: flex;
  flex-wrap: wrap;
  > * {
    // > * means "all direct children of the element
    flex: 1 0 100%;
    // flex: flex-grow flex-shrink flex-basis
    // flex-grow: how much the element should grow relative to its siblings
    // flex-shrink: how much the element should shrink relative to its siblings
    // flex-basis: the initial size of the element
  }
  @media (min-width: 768px) {
    > * {
      flex: 1 0 50%;
    }
  }
  @media (min-width: 992px) {
    > * {
      flex: 1 0 33.3333%;
    }
  }
}
```

In the main.scss file, use the variables and mixins that you defined to create your styles:

```scss
body {
  font-size: $font-size-base;
  color: $primary-color;
}

.container {
  @include responsive-grid;
}

.box {
  background-color: $secondary-color;
  padding: 20px;
}
```

In your terminal, run the following command to compile the main.scss file into a CSS file:

```bash
node-sass src/sass/main.scss src/css/main.css
```

Create an index.html file in the root of your project. In the head of the HTML file, link to the main.css file that you just created:

```html
<link rel="stylesheet" href="src/css/main.css">
```

Use the variables and mixins in the main.css file to style the HTML elements in your landing page. For example:

```html
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
```