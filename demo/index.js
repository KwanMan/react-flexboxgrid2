const React = require('react')
const ReactDOM = require('react-dom')

const { Container, Row, Col } = require('../src')

const demoApp = (
  <Container>
    <Row>
      <Col xs={3} xsOffset={1} md={5} mdOffset={0} lg>
        <div style={{backgroundColor: 'black', color: 'white'}}>Responsive</div>
      </Col>
      <Col xs={3} xsOffset={1} md={5} mdOffset={1} lg={1} lgOffset={0}>
        <div style={{backgroundColor: 'black', color: 'white'}}>Responsive</div>
      </Col>
      <Col xs={3} xsOffset={1} md={1} mdOffset={0} lg={1} lgOffset={0}>
        <div style={{backgroundColor: 'black', color: 'white'}}>Responsive</div>
      </Col>
    </Row>
  </Container>
)

ReactDOM.render(demoApp, document.querySelector('#root'))
