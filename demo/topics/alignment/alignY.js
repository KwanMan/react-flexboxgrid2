const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')

module.exports = align => ({
  subtitle: `xsAlignY='${align}'`,
  demo: (
    <Row xsAlignY={align}>
      <Col xs={6}><Box large /></Col>
      <Col xs={6}><Box /></Col>
    </Row>
  ),
  code: `
<Row xsAlignY='${align}'>
  <Col xs={6}>
    <div>${align}</div>
  </Col>
</Row>`
})
