const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')

module.exports = {
  title: 'Responsive',
  description: 'Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths.',
  sections: [{
    demo: [
      <Row key='responsive-0'>
        <Col xs={12} sm={4} md={3} lg={2} xl={1}><Box /></Col>
        <Col xs={6} sm={4} md={6} lg={8} xl={10}><Box /></Col>
        <Col xs={6} sm={4} md={3} lg={2} xl={1}><Box /></Col>
      </Row>,
      <Row key='responsive-1'>
        <Col xs={12} sm={6} md={3} lg={2} xl={1}><Box /></Col>
        <Col xs={12} sm={6} md={9} lg={10} xl={11}><Box /></Col>
      </Row>,
      <Row key='responsive-2'>
        <Col xs={10} sm={6} md={8} lg={10} xl={11}><Box /></Col>
        <Col xs={2} sm={6} md={4} lg={2} xl={1}><Box /></Col>
      </Row>
    ],
    code: `
<Row>
  <Col xs={12}
       sm={8}
       md={6}
       lg={4}
       xl={2}>
    <div>Responsive</div>
  </Col>
</Row>`
  }]
}
