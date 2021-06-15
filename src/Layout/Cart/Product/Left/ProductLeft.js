import React from 'react';
import ProductTitle from './ProductLeftTitle'
import ProductPrice from './ProductLeftPrice'
import ProductSizes from './ProductLeftSizes'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height:100%;
`

class ProductLeft extends React.Component {

  render() {
    const { title, price, sizes } = this.props;
    return (
      <Wrapper>
        <div>
          <ProductTitle text={title} />
          <ProductPrice text={price} />
        </div>
        <ProductSizes sizes={sizes} />
      </Wrapper>
    )
  }
}
export default ProductLeft;