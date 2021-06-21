import Text from 'Components/Text';
import React from 'react';
import { AppContext } from 'Store/AppContext';
import styled from 'styled-components'
import { currencies } from 'Utils/Objects';

const TotalContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:40px;
`

class CartTotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    }
  }

  calculateTotal = () => {
    let total = 0;
    this.props.cart
      .map((item) => {
        return item.prices
          .filter(price => price.currency === this.context.activeCurrency)
          .map((price) => {
            return total = total + price.amount;
          })

      })
    this.setState({ total: total, });
    return;
  };

  componentDidMount() {
    this.calculateTotal();
  }

  render() {
    const { cart } = this.props;
    const { activeCurrency } = this.context;


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
          {currencies[activeCurrency] + this.state.total}
        </Text>
      </TotalContainer>
    )

    return null;
  }
}

CartTotal.contextType = AppContext;

export default CartTotal;