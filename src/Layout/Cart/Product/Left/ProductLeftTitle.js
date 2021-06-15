import Text from 'Components/Text';
import React from 'react';

class ProductTitle extends React.Component {

  render() {
    return (
      <Text
        fontWeight='300'
        fontSize='16px'
        lineHeight='25.6px'
        color='text'
      >
        {this.props.text}
      </Text>
    )
  }
}
export default ProductTitle;