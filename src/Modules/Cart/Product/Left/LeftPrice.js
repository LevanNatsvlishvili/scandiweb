import React from 'react';
import Text from 'Components/Text'
import { currencies } from 'Utils/Objects'
import { AppContext } from 'Store/AppContext';

class ProductPrice extends React.Component {

  render() {
    const { prices } = this.props;
    const { activeCurrency } = this.context;

    if (Array.isArray(prices)) return (
      <Text
        margin='12px 0 0 0'
        fontWeight='700'
        fontSize='24px'
        lineHeight='42px'
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
      </Text>
    )

    return null;
  }
}

ProductPrice.contextType = AppContext;

export default ProductPrice;