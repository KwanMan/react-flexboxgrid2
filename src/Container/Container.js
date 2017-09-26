const styled = require('styled-components').default
const ifProp = require('../utils/ifProp')
const { smViewport, mdViewport, lgViewport, xlViewport } = require('../constants/media')
const {
  gutterWidth,
  containerSm,
  containerMd,
  containerLg,
  containerXl
} = require('../constants/variables')

module.exports = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: .5rem;
  padding-left: .5rem;

  ${ifProp('fluid', `
    padding-right: ${gutterWidth};
    padding-left: ${gutterWidth};
  `)}

  @media ${smViewport} {
    padding-right: .5rem;
    padding-left: .5rem;

    width: ${containerSm};
    max-width: 100%;
  }

  @media ${mdViewport} {
    padding-right: .5rem;
    padding-left: .5rem;

    width: ${containerMd};
    max-width: 100%;
  }
  
  @media ${lgViewport} {
    padding-right: .5rem;
    padding-left: .5rem;

    width: ${containerLg};
    max-width: 100%;
  }
  
  @media ${xlViewport} {
    padding-right: .5rem;
    padding-left: .5rem;

    width: ${containerXl};
    max-width: 100%;
  }
`
