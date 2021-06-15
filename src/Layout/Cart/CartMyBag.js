import React from 'react';
import styled from 'styled-components'
import Text from 'Components/Text/';

const Title = styled.div`
    display:flex;

`

class CartMyBag extends React.Component {

  render() {
    return (
      <Title>
        <Text
          color='text'
          fontSize='16px'
          lineHeight='25.6px'
          fontWeight='bold'
        >
          My Bag,
        </Text>
        <Text
          margin='0 0 0 4px'
          color='text'
          fontSize='16px'
          lineHeight='25.6px'
          fontWeight='500'
        >
          2 items
        </Text>
      </Title>
    )
  }
}
export default CartMyBag;