const styled = require('styled-components').default

const colors = [
  '#007fff',
  '#06c',
  '#036'
]

const Box = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 1.5rem;
  padding: 1rem;
  ${props => !props.depth ? 'margin-bottom: 1rem;' : ''}
  background: ${props => colors[props.depth || 0]};
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  ${props => props.large ? 'height: 8rem;' : ''}
`

module.exports = Box
