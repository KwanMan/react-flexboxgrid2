const React = require('react')
const ReactDOM = require('react-dom')

const { Container, Row } = require('../src')

// const Responsive = require('./sections/Responsive')
// const Fluid = require('./sections/Fluid')
// const SimpleSyntax = require('./sections/SimpleSyntax')
// const Offsets = require('./sections/Offsets')
// const AutoWidth = require('./sections/AutoWidth')
// const NestedGrids = require('./sections/NestedGrids')
// const Alignment = require('./sections/Alignment')
// const Distribution = require('./sections/Distribution')
// const Reordering = require('./sections/Reordering')
// const Reversing = require('./sections/Reversing')
// const Hiding = require('./sections/Hiding')

const Topics = require('./topics')

const demoApp = (
  <div className='page'>
    <header className='hero'>
      <Row xsAlignX='center'>
        <h1 className='hero-headline'>react-flexboxgrid2</h1>
      </Row>
      <Row xsAlignX='center'>
        <p className='hero-copy'>A React implementation of a grid system based on the <a href='http://caniuse.com/#search=flexbox'><code className='inline-anchor'>flex</code></a> display property.
        </p>
      </Row>
      <Row xsAlignX='center'>
        <a className='button' href='https://github.com/kwanman/react-flexboxgrid2'>Github</a>
      </Row>
    </header>
    <Container>
      <Topics />
    </Container>
  </div>
)

ReactDOM.render(demoApp, document.querySelector('#root'))
