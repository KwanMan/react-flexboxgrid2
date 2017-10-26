const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = align => ({
  subtitle: `xsAlignX='${align}'`,
  demo: (
    <Wrapper>
      <Row xsAlignX={align}>
        <Col xs={6}>
          <Box depth={2} />
        </Col>
      </Row>
    </Wrapper>
  ),
  code: `
<Row xsAlignX='${align}'>
  <Col xs={6}>
    <div>${align}</div>
  </Col>
</Row>`
})
