import React from 'react';
import ProductTitle from './ProductLeftTitle'
import ProductPrice from './ProductLeftPrice'
import ProductSizes from './Sizes/'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height:100%;
`

class ProductLeft extends React.Component {

  render() {
    const { title, prices, sizes, currentSize, handleSize } = this.props;
    console.log(sizes[0]);
    return (
      <Wrapper>
        <div>
          <ProductTitle text={title} />
          <ProductPrice prices={prices} />
        </div>
        <ProductSizes
          handleSize={handleSize}
          currentSize={currentSize}
          sizes={sizes} />
      </Wrapper>
    )
  }
}
export default ProductLeft;