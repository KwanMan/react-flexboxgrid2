const React = require('react')

const { Row, Col } = require('../../src')
const Box = require('../Box')

module.exports = {
  title: 'Offsets',
  description: 'Offset a column',
  preview: (
    <div>
      <Row>
        <Col xs={3}><Box /></Col>
        <Col xsOffset={3} xs={6}><Box /></Col>
      </Row>
      <Row>
        <Col xsOffset={4} xs={6}><Box /></Col>
      </Row>
      <Row>
        <Col xsOffset={2} xs={4}><Box /></Col>
      </Row>
    </div>
  ),
  code: `
<Row>
  <Col xsOffset={3} xs={9}>
    <div>offset</div>
  </Col>
</Row>
`
}
