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
    return (
      <Wrapper>
        <ProductRightQuantity />
        <ProductRightImage img={this.props.img} />
      </Wrapper>
    )
  }
}
export default ProductLeft;