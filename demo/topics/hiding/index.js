const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = {
  title: 'Hiding',
  description: 'Add one or more breakpoint modifiers to hide columns based on the viewport.',
  sections: [{
    demo: (
      <Wrapper>
        <Row>
          <Col xs xsHidden><Box depth={2}><div>xs</div></Box></Col>
          <Col xs smHidden><Box depth={2}><div>sm</div></Box></Col>
          <Col xs mdHidden><Box depth={2}><div>md</div></Box></Col>
          <Col xs lgHidden><Box depth={2}><div>lg</div></Box></Col>
          <Col xs xlHidden><Box depth={2}><div>xl</div></Box></Col>
        </Row>
      </Wrapper>
    ),
    code: `
<Row>
  <Col xs xsHidden>
    <div>xs</div>
  </Col>
  <Col sm smHidden>
    <div>sm</div>
  </Col>
  <Col md mdHidden>
    <div>md</div>
  </Col>
  <Col lg lgHidden>
    <div>lg</div>
  </Col>
  <Col xl xlHidden>
    <div>xl</div>
  </Col>
</Row>`
  }]
}
