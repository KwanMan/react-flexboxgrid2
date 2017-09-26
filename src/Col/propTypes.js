const PropTypes = require('prop-types')
const sizes = require('../constants/sizes')

const attrs = [
  [ '', PropTypes.oneOf([ true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]) ],
  [ 'Offset', PropTypes.oneOf([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]) ],
  [ 'Justify', PropTypes.oneOf(['start', 'center', 'end']) ],
  [ 'Align', PropTypes.oneOf(['top', 'middle', 'bottom']) ],
  [ 'Space', PropTypes.oneOf(['between', 'around']) ],
  [ 'Order', PropTypes.oneOf(['first', 'last', 'initial']) ],
  [ 'Hidden', PropTypes.bool ]
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
