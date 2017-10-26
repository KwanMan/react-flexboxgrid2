const alignX = require('./alignX')
const alignY = require('./alignY')
const combination = require('./combination')

module.exports = {
  title: 'Alignment',
  description: 'Align elements to the start or end of a row as well as the top, bottom, or center of a column',
  sections: [
    alignX('start'),
    alignX('center'),
    alignX('end'),
    combination,
    alignY('top'),
    alignY('middle'),
    alignY('bottom')
  ]
}
