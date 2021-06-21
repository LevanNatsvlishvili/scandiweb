import React from 'react';
import ProductRightQuantity from './ProductRightQuantity'
import ProductRightImage from './ProductRightImage'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  height:100%;
`

class ProductLeft extends React.Component {

  render() {
    const { imgs } = this.props;
    if (Array.isArray(imgs)) return (
      <Wrapper>
        <ProductRightQuantity />


        <ProductRightImage img={imgs[0]} />
      </Wrapper>
    )

    return null;
  }
}
export default ProductLeft;