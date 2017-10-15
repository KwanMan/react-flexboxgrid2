const React = require('react')

const { Row, Col } = require('../../src')
const Box = require('../Box')

module.exports = {
  title: 'Fluid',
  description: 'Percent based widths allow fluid resizing of columns and rows.',
  preview: (
    <div>
      <Row>
        <Col xs={12}><Box /></Col>
      </Row>
      <Row>
        <Col xs={1}><Box /></Col>
        <Col xs={11}><Box /></Col>
      </Row>
      <Row>
        <Col xs={2}><Box /></Col>
        <Col xs={10}><Box /></Col>
      </Row>
      <Row>
        <Col xs={3}><Box /></Col>
        <Col xs={9}><Box /></Col>
      </Row>
      <Row>
        <Col xs={4}><Box /></Col>
        <Col xs={8}><Box /></Col>
      </Row>
      <Row>
        <Col xs={5}><Box /></Col>
        <Col xs={7}><Box /></Col>
      </Row>
      <Row>
        <Col xs={6}><Box /></Col>
        <Col xs={6}><Box /></Col>
      </Row>
    </div>
  ),
  code: `
flex-basis: 50%;
`
}
