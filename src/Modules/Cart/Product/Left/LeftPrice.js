import React from 'react';
import Text from 'Components/Text'


class ProductPrice extends React.Component {

  render() {
    const { price } = this.props;
    return (
      <Text
        margin='12px 0 0 0'
        fontWeight='700'
        fontSize='24px'
        lineHeight='42px'
        color='text'
      >
        {price}
      </Text>
    )
  }
}

export default ProductPrice;