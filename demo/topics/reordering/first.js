const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = {
  subtitle: `xsOrder='first'`,
  description: 'Forces a column to appear first.',
  demo: (
    <Wrapper>
      <Row>
        <Col xs={2}><Box depth={1}><div>1</div></Box></Col>
        <Col xs={2}><Box depth={1}><div>2</div></Box></Col>
        <Col xs={2}><Box depth={1}><div>3</div></Box></Col>
        <Col xs={2}><Box depth={1}><div>4</div></Box></Col>
        <Col xs={2}><Box depth={1}><div>5</div></Box></Col>
        <Col xs={2} xsOrder='first'><Box depth={2}><div>6</div></Box></Col>
      </Row>
    </Wrapper>
  ),
  code: `
<Row>
  <Col xs={2}>
    <div>1</div>
  </Col>
  <Col xs={2}>
    <div>2</div>
  </Col>
  <Col xs={2} xsOrder='first'>
    <div>3</div>
  </Col>
</Row>`
}
