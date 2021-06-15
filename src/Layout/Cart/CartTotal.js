import Text from 'Components/Text';
import React from 'react';
import styled from 'styled-components'

const TotalContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:40px;
`

class CartTotal extends React.Component {

  render() {
    return (
      <TotalContainer>

        <Text
          color='text'
          fontWeight='500'
          fontSize='16px'
          lineHeight='16px'
          style={{ alignSelf: 'flex-end' }}
        >
          Total
              </Text>
        <Text
          fontWeight='700'
          fontSize='16px'
          lineHeight='25.6px'
          align='right'
          color='text'
        >
          $100.00
        </Text>
      </TotalContainer>
    )
  }
}

export default CartTotal;