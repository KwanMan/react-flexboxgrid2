react-flexboxgrid2
==================

A react implementation of [flexboxgrid2](https://github.com/evgenyrodionov/flexboxgrid2)

flexboxgrid2 is grid, but the use of global classes caused conflicts for me so this is a reimplementation using [styled-components](https://www.styled-components.com/)


## Usage

```js
import React from 'react'
import { Container, Row, Col } from 'react-flexboxgrid2'

export default function App () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}><div>Column1</div></Col>
        <Col xs={12} md={6}><div>Column2</div></Col>
      <Row/>
    </Container>
  )
}
```
