import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
  margin:auto;
`

class LayoutBrand extends React.Component {

  render() {
    return (
      <Img src='/icons/brand.svg' alt='brand' />
    )
  }
}
export default LayoutBrand;