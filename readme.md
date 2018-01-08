# react-svg-draw


> A React component for the SVG Elements.

## Install

```bash
npm install --save react-svg-draw

or

yarn add react-svg-draw
```

## Usage

```js
const React = require('react')
const SVG = require('react-svg-draw')
const {Circle} = SVG;
React.render(<SVG><Circle cx="40" cy="40" r="24" /></SVG>, document.body)
```

## TAGS Available

* &lt;SVG /&gt;
* <SVG.A />
* <SVG.Animate />
* <SVG.AnimateMotion />
* <SVG.AnimateTransform />
* <SVG.Circle />
* <SVG.Defs />
* <SVG.Ellipse />
* <SVG.G />
* <SVG.Image />
* <SVG.Line />
* <SVG.Path />
* <SVG.Polygon />
* <SVG.Polyline />
* <SVG.Rect />
* <SVG.Symbol />
* <SVG.Text />
* <SVG.THref />
* <SVG.TSpan />
* <SVG.Use />

## Examples

**Regular usage**

```js
var React = require('react')
const SVG = require('react-svg-draw')
const {Circle, Defs, G, Rect, Use} = SVG;

var MyComponent = React.createClass({
  render: function() {
    return (
      <SVG>
        <Defs>
          <G id="shape">
              <Rect x="50" y="50" width="50" height="50" />
              <Circle cx="50" cy="50" r="50" />
          </G>
        </Defs>
        <Use xlinkHref="#shape" x="50" y="50" />
        <Use xlinkHref="#shape" x="200" y="50" />
      </SVG>
    )
  },
})
```

**With ES6 JS**

```js
import React from 'react'
import SVG, {Circle} from 'react-svg-draw'

class MyComponent extends React.Component {
  render() {
    return (
      <SVG>
        <Defs>
          <G id="shape">
              <Rect x="50" y="50" width="50" height="50" />
              <Circle cx="50" cy="50" r="50" />
          </G>
        </Defs>
        <Use xlinkHref="#shape" x="50" y="50" />
        <Use xlinkHref="#shape" x="200" y="50" />
      </SVG>
    )
  }
}
```
## License

[MIT](license) &copy; [Arshpreet Wadehra][author]

[author]: https://github.com/wadehrarshpreet
