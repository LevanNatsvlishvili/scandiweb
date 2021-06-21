import React from 'react';
import ProductTitle from './ProductLeftTitle'
import ProductPrice from './ProductLeftPrice'
import ProductAttributes from './Attributes/'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height:100%;
`

class ProductLeft extends React.Component {

  render() {
    const { title, prices, attributes, currentSize, handleSize } = this.props;
    return (
      <Wrapper>
        <div>
          <ProductTitle text={title} />
          <ProductPrice prices={prices} />
        </div>
        <ProductAttributes
          handleSize={handleSize}
          currentSize={currentSize}
          attributes={attributes} />
      </Wrapper>
    )
  }
}
export default ProductLeft;