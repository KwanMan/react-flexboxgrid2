const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = {
  title: 'Reversing',
  sections: [{
    demo: (
      <Wrapper>
        <Row reverse>
          <Col xs={2}><Box depth={2}><div>1</div></Box></Col>
          <Col xs={2}><Box depth={2}><div>2</div></Box></Col>
          <Col xs={2}><Box depth={2}><div>3</div></Box></Col>
          <Col xs={2}><Box depth={2}><div>4</div></Box></Col>
          <Col xs={2}><Box depth={2}><div>5</div></Box></Col>
          <Col xs={2}><Box depth={2}><div>6</div></Box></Col>
        </Row>
      </Wrapper>
    ),
    code: `
<Row reverse>
  <Col xs={2}>
    <div>1</div>
  </Col>
  <Col xs={2}>
    <div>2</div>
  </Col>
  <Col xs={2}>
    <div>3</div>
  </Col>
</Row>`
  }]
}
