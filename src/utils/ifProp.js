module.exports = function ifProp (prop, style) {
  return props => {
    if (!props[prop]) return ''
    return style
  }
}
