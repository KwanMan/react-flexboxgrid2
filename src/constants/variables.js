const { sm, md, lg, xl } = require('./sizes')

const gutterWidth = `1rem`
const gutterMargin = `2rem`
const gutterCompensation = `calc((${gutterWidth} * 0.5) * -1)`
const halfGutterWidth = `calc((${gutterWidth} * 0.5))`
const xsMin = `0rem`
const smMin = `${sm.min}px`
const mdMin = `${md.min}px`
const lgMin = `${lg.min}px`
const xlMin = `${xl.min}px`
const screenXsMin = xsMin
const screenSmMin = smMin
const screenMdMin = mdMin
const screenLgMin = lgMin
const containerSm = `calc(${smMin} - ${gutterWidth})`
const containerMd = `calc(${mdMin} - ${gutterWidth})`
const containerLg = `calc(${lgMin} - ${gutterWidth})`
const containerXl = `calc(${xlMin} - ${gutterWidth})`

module.exports = {
  gutterWidth,
  gutterMargin,
  gutterCompensation,
  halfGutterWidth,
  xsMin,
  smMin,
  mdMin,
  lgMin,
  xlMin,
  screenXsMin,
  screenSmMin,
  screenMdMin,
  screenLgMin,
  containerSm,
  containerMd,
  containerLg,
  containerXl
}
