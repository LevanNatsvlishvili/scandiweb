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
    let totalNum = 0;
    if (Array.isArray(cart)) return (

      item.prices.map((price) => {
        console.log(price.amount);
        return (
          <p>

            {price.amount}
          </p>

        )
      })

    )

    return null;
  }
}

CartTotal.contextType = AppContext;

export default CartTotal;