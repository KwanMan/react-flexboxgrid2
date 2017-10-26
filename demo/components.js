const React = require('react')
const styled = require('styled-components').default

const { Row, Col } = require('../src')
const Box = require('./Box')

module.exports.Section = ({ children }) => (
  <section className='page-section'>
    {children}
  </section>
)

module.exports.Title = styled.h2``
module.exports.Subtitle = ({ children }) => (<h3><code>{children}</code></h3>)
module.exports.Description = styled.p``

module.exports.Code = ({ children, code }) => {
  const sanitised = code ? code.replace(/^\n/, '') : children
  return <pre><code>{sanitised}</code></pre>
}

module.exports.Wrapper = ({ children }) => (
  <Row>
    <Col xs={12}>
      <Box>{children}</Box>
    </Col>
  </Row>
)
