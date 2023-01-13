# Flex

Flex is a CSS layout mode that makes it easy to design flexible responsive layout structure without using float or positioning.

One dimension of flex layout is the flex container, established by a flex container element. A flex container establishes a new block formatting context for its contents.

The other dimension is the flex items, which are the children of the flex container.

## Flex Container

The flex container is the parent element of the flex items. It is defined by the `display` property with a value of `flex` or `inline-flex`.

```css
.container {
  display: flex;
}

.container {
  display: inline-flex;
}
```

## Flex Items

The flex items are the children of the flex container. They are defined by the `display` property with a value of `flex` or `inline-flex`.

```css
.item {
  display: flex;
}

.item {
  display: inline-flex;
}
```

## Flex Direction

The flex-direction property specifies the direction of the flexible items.

```css
.container {
  flex-direction: row;
}

.container {
  flex-direction: row-reverse;
}

.container {
  flex-direction: column;
}

.container {
  flex-direction: column-reverse;
}
```

## Flex Wrap

The flex-wrap property specifies whether the flexible items should wrap or not.

```css
.container {
  flex-wrap: nowrap;
}

.container {
  flex-wrap: wrap;
}

.container {
  flex-wrap: wrap-reverse;
}
```

## Flex Flow

The flex-flow property is a shorthand property for the flex-direction and the flex-wrap properties.

```css
.container {
  flex-flow: row nowrap;
}

.container {
  flex-flow: row wrap;
}
```

## Justify Content

The justify-content property defines the alignment along the main axis.

```css
.container {
  justify-content: flex-start;
}

.container {
  justify-content: flex-end;
}

.container {
  justify-content: center;
}

.container {
  justify-content: space-between;
}

.container {
  justify-content: space-around;
}
```

## Align Items

The align-items property defines the default behavior for how flex items are laid out along the cross axis on the current line.

```css

.container {
  align-items: flex-start;
}

.container {
  align-items: flex-end;
}

.container {
  align-items: center;
}

.container {
  align-items: baseline;
}

.container {
  align-items: stretch;
}
```

## Align Content

The align-content property defines the alignment along the cross axis.

```css
.container {
  align-content: flex-start;
}

.container {
  align-content: flex-end;
}

.container {
  align-content: center;
}

.container {
  align-content: space-between;
}

.container {
  align-content: space-around;
}

.container {
  align-content: stretch;
}
```

## Order

The order property specifies the order of the flexible item, relative to the rest.

```css

.item {
  order: 5;
}

.item {
  order: -1;
}
```

## Flex Grow

The flex-grow property specifies how much the item will grow relative to the rest.

```css
.item {
  flex-grow: 1;
}

.item {
  flex-grow: 2;
}
```

## Flex Shrink

The flex-shrink property specifies how the item will shrink relative to the rest.

```css
.item {
  flex-shrink: 1;
}

.item {
  flex-shrink: 2;
}
```

## Flex Basis

The flex-basis property specifies the initial length of a flexible item.

```css
.item {
  flex-basis: 10%;
}

.item {
  flex-basis: 50px;
}
```

## Flex

The flex property is a shorthand property for the flex-grow, flex-shrink and the flex-basis properties.

```css
.item {
  flex: 1 1 10%;
}

.item {
  flex: 2 2 50px;
}
```
