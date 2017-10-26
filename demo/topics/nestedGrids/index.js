const React = require('react')

const { Row, Col } = require('../../../src')
const Box = require('../../Box')

module.exports = {
  title: 'Nested Grids',
  description: 'Nest grids inside grids inside grids.',
  sections: [{
    demo: [
      <Row>
        <Col xs={7}>
          <Box depth={0}>
            <Row>
              <Col xs={9}>
                <Box depth={1}>
                  <Row>
                    <Col xs={4}><Box depth={2} /></Col>
                    <Col xs={8}><Box depth={2} /></Col>
                  </Row>
                </Box>
              </Col>
              <Col xs={3}>
                <Box depth={1}>
                  <Row>
                    <Col xs><Box depth={2} /></Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Box>
        </Col>
        <Col xs={5}>
          <Box depth={0}>
            <Row>
              <Col xs={12}>
                <Box depth={1}>
                  <Row>
                    <Col xs={6}><Box depth={2} /></Col>
                    <Col xs={6}><Box depth={2} /></Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    ],
    code: `
<Row>
  <Col xs>
    <div>
      <Row>
        <Col xs>
          <div>auto</div>
        </Col>
      </Row>
    </div>
  </Col>
</Row>`
  }]
}
