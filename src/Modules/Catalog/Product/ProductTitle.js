import Text from 'Components/Text';
import React from 'react';

class ProductTitle extends React.Component {

  render() {
    const { outOfStock, text } = this.props;

    return (
      <Text
        color={outOfStock ? 'out' : 'text'}
        fontWeight='300'
        fontSize='18px'
        lineHeight='28.8px'
      >
        {text}
      </Text>
    )
  }
}
export default ProductTitle;