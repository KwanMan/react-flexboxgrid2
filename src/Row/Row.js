const styled = require('styled-components').default
const ifProp = require('../utils/ifProp')
const { gutterCompensation } = require('../constants/variables')

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
`
