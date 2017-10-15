const React = require('react')
const ReactDOM = require('react-dom')

const Section = require('./Section')
const responsive = require('./sections/responsive')
const fluid = require('./sections/fluid')
const simpleSyntax = require('./sections/simpleSyntax')
const offsets = require('./sections/offsets')
const autoWidth = require('./sections/autoWidth')

const demoApp = (
  <div>
    <Section {...responsive} />
    <Section {...fluid} />
    <Section {...simpleSyntax} />
    <Section {...offsets} />
    <Section {...autoWidth} />
  </div>
)

ReactDOM.render(demoApp, document.querySelector('#root'))
