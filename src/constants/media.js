const {
  xs, sm, md, lg, xl
} = require('./sizes')

module.exports = {
  smViewport: `only screen and (min-width: ${sm.min}px)`,
  mdViewport: `only screen and (min-width: ${md.min}px)`,
  lgViewport: `only screen and (min-width: ${lg.min}px)`,
  xlViewport: `only screen and (min-width: ${xl.min}px)`,
  xsOnly: `only screen and (max-width: ${xs.max}px)`,
  smOnly: `only screen and (min-width: ${sm.min}px) and (max-width: ${sm.max}px)`,
  mdOnly: `only screen and (min-width: ${md.min}px) and (max-width: ${md.max}px)`,
  lgOnly: `only screen and (min-width: ${lg.min}px) and (max-width: ${lg.max}px)`,
  xlOnly: `only screen and (min-width: ${xl.min}px)`
}
