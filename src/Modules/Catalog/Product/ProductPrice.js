import Text from 'Components/Text';
import React from 'react';
import { AppContext } from 'Store/AppContext';
import { currencies } from 'Utils/Objects';

class ProductPrice extends React.Component {


  render() {
    const { outOfStock, prices } = this.props;
    const { activeCurrency } = this.context;
    if (Array.isArray(prices)) return (
      prices
        .filter(price => price.currency === activeCurrency)
        .map((price, i) => {
          return (
            <Text
              key={i}
              color={outOfStock ? 'out' : 'text'}
              fontWeight='600'
              fontSize='18px'
              lineHeight='28.8px'
            >
              {currencies[price.currency] + price.amount}
            </Text>
          )
        })

    )
  }
}

ProductPrice.contextType = AppContext;

export default ProductPrice;