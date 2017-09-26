const PropTypes = require('prop-types')
const sizes = require('../constants/sizes')

const attrs = [
  [ 'Justify', PropTypes.oneOf(['start', 'center', 'end']) ],
  [ 'Align', PropTypes.oneOf(['top', 'middle', 'bottom']) ],
  [ 'Space', PropTypes.oneOf(['between', 'around']) ]
]

function createPropTypes () {
  const propTypes = {}
  Object.keys(sizes).forEach(size => {
    attrs.forEach(([ suffix, def ]) => {
      propTypes[`${size}${suffix}`] = def
    })
  })
  return propTypes
}

module.exports = createPropTypes()
