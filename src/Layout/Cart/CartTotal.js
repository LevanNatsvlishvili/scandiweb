import Text from 'Components/Text';
import React from 'react';
import { AppContext } from 'Store/AppContext';
import styled from 'styled-components'

const TotalContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:40px;
`

class CartTotal extends React.Component {

  render() {
    const { cart } = this.props;
    const { activeCurrency } = this.context;
    console.log(cart);
    let totalNum = 0;
    if (Array.isArray(cart)) return (
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
          {cart
            .filter(item => console.log(item))
            .map((item) => {
              console.log(totalNum);
              totalNum = totalNum + item.prices.amount;
              return (
                item.prices.amount
              )
              // console.log(total);
            })}
        </Text>
      </TotalContainer>
    )

    return null;
  }
}

CartTotal.contextType = AppContext;

export default CartTotal;