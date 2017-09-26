module.exports = {
  auto: `
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  `
}

for (let i = 1; i <= 12; i++) {
  module.exports[i] = `
    flex-basis: ${(100 / 12) * i}%;
    max-width: ${(100 / 12) * i}%;
  `
}
