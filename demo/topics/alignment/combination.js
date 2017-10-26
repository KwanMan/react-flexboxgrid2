const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')
const { Wrapper } = require('../../components')

module.exports = {
  description: 'Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes.',
  demo: (
    <Wrapper>
      <Row xsAlignX='center' smAlignX='end' lgAlignX='start'>
        <Col xs={6}><Box depth={2} /></Col>
      </Row>
    </Wrapper>
  ),
  code: `
<Row xsAlignX='center' smAlignX='end' lgAlignX='start'>
  <Col xs={6}>
    <div>All together now</div>
  </Col>
</Row>`
}
