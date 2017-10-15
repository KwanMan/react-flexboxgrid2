const React = require('react')

const { Row, Col } = require('../../src')
const Box = require('../Box')

module.exports = {
  title: 'Simple Syntax',
  description: 'All you need to remember is row, column, content.',
  preview: null,
  code: `
<Row>
  <Col xs={12}>
    <div>12</div>
  </Col>
</Row>
`
}
