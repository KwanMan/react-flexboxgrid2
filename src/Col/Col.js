const styled = require('styled-components').default

const {
  smViewport,
  mdViewport,
  lgViewport,
  xlViewport,
  xsOnly,
  smOnly,
  mdOnly,
  lgOnly,
  xlOnly
} = require('../constants/media')
const { halfGutterWidth } = require('../constants/variables')
const ifProp = require('../utils/ifProp')

const cssDefs = require('./css')
const propTypes = require('./propTypes')

const attrs = [
  { suffix: '', cssKey: 'width', transform: v => v === true ? 'auto' : v },
  { suffix: 'Offset', cssKey: 'offset' },
  { suffix: 'Order', cssKey: 'order' }
]

function buildViewportCss (size) {
  return props => {
    let css = ''
    attrs.forEach(({ suffix, cssKey, transform = v => v }) => {
      const value = transform(props[`${size}${suffix}`])
      if (typeof value !== 'undefined') css += cssDefs[cssKey][value]
    })
    return css
  }
}

module.exports = styled.div`
  ${ifProp('reverse', 'flex-direction: column-reverse;')}
  
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${halfGutterWidth};
  padding-left: ${halfGutterWidth};

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

  @media ${xsOnly} {
    ${ifProp('xsHidden', 'display: none;')}
  }
  
  @media ${smOnly} {
    ${ifProp('smHidden', 'display: none;')}
  }
  
  @media ${mdOnly} {
    ${ifProp('mdHidden', 'display: none;')}
  }
  
  @media ${lgOnly} {
    ${ifProp('lgHidden', 'display: none;')}
  }
  
  @media ${xlOnly} {
    ${ifProp('xlHidden', 'display: none;')}
  }
`

module.exports.propTypes = propTypes
