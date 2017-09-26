module.exports = { width, offset, order }

function width (value) {
  if (value === 'auto') {
    return `
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    `
  }
  return `
    flex-basis: ${(100 / 12) * value}%;
    max-width: ${(100 / 12) * value}%;
  `
}

function offset (value) {
  return `margin-left: ${(100 / 12) * value}%;`
}

function order (value) {
  return {
    first: `order: -1;`,
    last: `order: 1;`,
    initial: `order: initial;`
  }[value]
}
