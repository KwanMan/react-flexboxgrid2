const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const ife = require('../../ife')

module.exports = {
  title: 'Fluid',
  description: 'Percent based widths allow fluid resizing of columns and rows.',
  sections: [{
    demo: [0, 1, 2, 3, 4, 5, 6].map(idx => {
      return (
        <Row key={`fluid-${idx}`}>
          {ife(idx, <Col xs={idx}><Box /></Col>)}
          <Col xs={12 - idx}><Box /></Col>
        </Row>
      )
    }),
    code: `
width: 50%;    
`
  }]
}
