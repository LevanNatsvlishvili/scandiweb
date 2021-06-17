import React from 'react';
import styled from 'styled-components'
import ButtonBlock from 'Components/Buttons/ButtonBlock';

const ButtonWrapper = styled.div`
  margin-top:20px;
`

class DetailsAddToCart extends React.Component {

  render() {
    return (
      <ButtonWrapper>
        <ButtonBlock
          background='primary'
          borderColor='transparent'
          color='white'
          fontSize='16px'
          lineHeight='19.2px'
          fontWeight='600'
        >
          Add To Cart
        </ButtonBlock>
      </ButtonWrapper>
    )
  }
}

export default DetailsAddToCart;