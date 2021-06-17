import Text from 'Components/Text';
import React from 'react';

class ProductPrice extends React.Component {

  render() {
    const { outOfStock } = this.props;
    return (
      <Text
        color={outOfStock ? 'out' : 'text'}
        fontWeight='600'
        fontSize='18px'
        lineHeight='28.8px'
      >
        $50.00
      </Text>
    )
  }
}
export default ProductPrice;