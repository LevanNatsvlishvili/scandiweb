import React from 'react';
import styled from 'styled-components'
import Text from 'Components/Text'
import { AppContext } from 'Store/AppContext';

const PriceWrapper = styled.div`
  margin-top:40px;
`

const currencies = {
  USD: '$',
  GBP: '£',
  JPY: '¥',
  AUD: '$',
  RUB: '₽',
}

class DetailsPrice extends React.Component {

  render() {
    const { prices } = this.props;
    const { activeCurrency } = this.context;
    if (Array.isArray(prices)) return (
      <PriceWrapper>
        <Text
          fontWeight='700'
          fontSize='18px'
          lineHeight='18px'
          color='text'
        >
          PRICE:
        </Text>
        <Text
          margin='10px 0 0 0'
          fontWeight='700'
          fontSize='24px'
          lineHeight='18px'
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
      </PriceWrapper>
    )

    return null;
  }
}

DetailsPrice.contextType = AppContext;

export default DetailsPrice;