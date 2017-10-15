const React = require('react')

const { Container } = require('../src')
const Code = require('./Code')

module.exports = function Section ({ title, description, preview, code }) {
  return (
    <Container>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        {preview}
        <Code>{code}</Code>
      </section>
    </Container>
  )
}
