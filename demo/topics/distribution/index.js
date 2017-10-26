const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = {
  title: 'Distribution',
  description: 'Distribute the contents of a row or column.',
  sections: [{
    subtitle: `xsSpace='around'`,
    demo: (
      <Wrapper>
        <Row xsSpace='around'>
          <Col xs={2}><Box depth={2} /></Col>
          <Col xs={2}><Box depth={2} /></Col>
          <Col xs={2}><Box depth={2} /></Col>
        </Row>
      </Wrapper>
    ),
    code: `
<Row xsSpace='around'>
  <Col xs={2}>
    <div>around</div>
  </Col>
  <Col xs={2}>
    <div>around</div>
  </Col>
  <Col xs={2}>
    <div>around</div>
  </Col>
</Row>`
  }, {
    subtitle: `xsSpace='between'`,
    demo: [
      <Wrapper>
        <Row xsSpace='between'>
          <Col xs={2}><Box depth={2} /></Col>
          <Col xs={2}><Box depth={2} /></Col>
          <Col xs={2}><Box depth={2} /></Col>
        </Row>
      </Wrapper>
    ],
    code: `
<Row xsSpace='between'>
  <Col xs={2}>
    <div>between</div>
  </Col>
  <Col xs={2}>
    <div>between</div>
  </Col>
  <Col xs={2}>
    <div>between</div>
  </Col>
</Row>`
  }]
}
