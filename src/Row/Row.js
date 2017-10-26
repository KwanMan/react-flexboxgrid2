const styled = require('styled-components').default
const ifProp = require('../utils/ifProp')
const {
  smViewport,
  mdViewport,
  lgViewport,
  xlViewport
} = require('../constants/media')
const { gutterCompensation } = require('../constants/variables')
const cssDefs = require('./css')
const propTypes = require('./propTypes')

const attrs = [
  { suffix: 'AlignX', cssKey: 'alignX' },
  { suffix: 'AlignY', cssKey: 'alignY' },
  { suffix: 'Space', cssKey: 'space' }
]

function buildViewportCss (size) {
  return props => {
    const css = []
    attrs.forEach(({ suffix, cssKey, transform = v => v }) => {
      const value = transform(props[`${size}${suffix}`])
      if (typeof value !== 'undefined') css.push(cssDefs[cssKey](value))
    })
    return css.join('\n')
  }
}

module.exports = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${gutterCompensation};
  margin-left: ${gutterCompensation};

  ${ifProp('reverse', `
    flex-direction: row-reverse;
  `)}

  ${buildViewportCss('xs')}
  
  @media ${smViewport} {
    ${buildViewportCss('sm')}
  }
  
  @media ${mdViewport} {
    ${buildViewportCss('md')}
  }
  
  @media ${lgViewport} {
    ${buildViewportCss('lg')}
  }
  
  @media ${xlViewport} {
    ${buildViewportCss('xl')}
  }
`

module.exports.propTypes = propTypes
