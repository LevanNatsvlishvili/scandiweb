import Text from 'Components/Text';
import React from 'react';
import { AppContext } from 'Store/AppContext';

const currencies = {
  USD: '$',
  GBP: '£',
  JPY: '¥',
  AUD: '$',
  RUB: '₽',
}

class ProductPrice extends React.Component {

  render() {
    const { prices } = this.props;
    const { activeCurrency } = this.context;
    if (Array.isArray(prices)) return (
      <Text
        fontWeight='500'
        fontSize='16px'
        lineHeight='25.6px'
        color='text'
      >
        {prices ?
          prices
            .filter(price => price.currency === activeCurrency)
            .map((price) => {
              return (
                currencies[price.currency] + price.amount
              )
            }) : null}
        {/* {this.props.text} */}
      </Text>
    )

    return null;
  }
}

ProductPrice.contextType = AppContext;

export default ProductPrice;