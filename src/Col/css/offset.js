module.exports = {}

for (let i = 0; i < 12; i++) {
  module.exports[i] = `
    margin-left: ${(100 / 12) * i}%;
  `
}
