const React = require('react')

const { Row, Col } = require('../../src')
const Box = require('../Box')

module.exports = {
  title: 'Auto Width',
  description: 'Add any number of auto sizing columns to a row. Let the grid figure it out.',
  preview: (
    <div>
      <Row>
        <Col xs><Box /></Col>
        <Col xs><Box /></Col>
      </Row>
      <Row>
        <Col xs><Box /></Col>
        <Col xs><Box /></Col>
        <Col xs><Box /></Col>
      </Row>
    </div>
  ),
  code: `
<Row>
  <Col xs>
    <div>auto</div>
  </Col>
</Row>
`
}
