import React from 'react';
import styled from 'styled-components'
import Text from 'Components/Text'

const PriceWrapper = styled.div`
  margin-top:40px;
`

class DetailsPrice extends React.Component {

  render() {
    const { price } = this.props;
    return (
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
          {price}
        </Text>
      </PriceWrapper>
    )
  }
}

export default DetailsPrice;