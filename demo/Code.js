const React = require('react')
const styled = require('styled-components').default

module.exports = styled(({ className, children }) => {
  return <pre className={className}><code>{ children }</code></pre>
})`
  overflow-x: auto;
  padding: 1.25em;
  margin: 1.6em 0;
  font-size: .875em;
  background: #fcfcfc;
  white-space: pre;
  word-wrap: normal;

  > code {
    color: #007fff;
  }
`
