const React = require('react')

const { Section, Title, Description, Subtitle, Code } = require('../components')
const ife = require('../ife')

const topics = [
  require('./responsive'),
  require('./fluid'),
  require('./offsets'),
  require('./autoWidth'),
  require('./nestedGrids'),
  require('./alignment'),
  require('./distribution'),
  require('./reordering'),
  require('./reversing'),
  require('./hiding')
]

module.exports = () => {
  return topics.map(({ title, description, sections }, idx) => {
    const parts = [
      ife(title, <Title>{title}</Title>),
      ife(description, <Description>{description}</Description>)
    ]
    const children = sections.reduce((memo, { subtitle, description, demo, code }) => {
      return memo.concat([
        ife(subtitle, <Subtitle>{subtitle}</Subtitle>),
        ife(description, <Description>{description}</Description>),
        ife(demo, demo),
        ife(code, <Code code={code} />)
      ])
    }, parts)
    return <Section key={`section-${idx}`}>{children}</Section>
  })
}
