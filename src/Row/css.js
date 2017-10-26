module.exports = { alignY, alignX, space }

function alignY (value) {
  return {
    top: `align-items: flex-start;`,
    middle: `align-items: center;`,
    bottom: `align-items: flex-end;`
  }[value]
}

function alignX (value) {
  return {
    start: `
      justify-content: flex-start;
      text-align: start;
    `,
    center: `
      justify-content: center;
      text-align: center;
    `,
    end: `
      justify-content: flex-end;
      text-align: end;
    `
  }[value]
}

function space (value) {
  return {
    around: `justify-content: space-around;`,
    between: `justify-content: space-between;`
  }[value]
}
