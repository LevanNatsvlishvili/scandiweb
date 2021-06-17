import React from 'react';
import Text from 'Components/Text'

class ProductTitle extends React.Component {


  render() {
    const { title, type } = this.props;
    return (
      <div>
        <Text
          fontSize='30px'
          fontWeight='600'
          lineHeight='27px'
          margin='0 0 16px 0'
          color='text'
        >
          {title}
        </Text>

        <Text
          fontSize='30px'
          lineHeight='27px'
          color='text'
        >
          {type}
        </Text>
      </div >
    )
  }
}
export default ProductTitle;