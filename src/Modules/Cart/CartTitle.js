import React from 'react';
import Text from 'Components/Text'

class CartTitle extends React.Component {

  render() {
    return (
      <div>
        <Text
          fontWeight='700'
          fontSize='32px'
          lineHeight='40px'
          color='text'
        >
          Cart
        </Text>
      </div>
    )
  }
}
export default CartTitle;