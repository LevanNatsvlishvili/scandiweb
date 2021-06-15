import React from 'react';
import styled from 'styled-components'
import ProductAddToCart from './ProductAddToCart';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';


const ProductWrapper = styled.div`
  padding:16px;
  width:100%;
  background:#fff;
  &:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    transition:500ms;
    & button {
      display:unset;
    }
  }
}
`

const ImgContainer = styled.div`
  width:100%;
  position:relative;
  & img {
    width:100%;
  }
  &:before{
    position:absolute;
    content:'Out Of Stock';
    background: rgba(225, 225, 225, 0.5);
    color:#8D8F9A;
    line-height: 38.4px;
    font-size: 24px;
    display: ${props => props.outOfStock ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`

const TextContainer = styled.div`
margin - top: 24px;
`

class Product extends React.Component {

  render() {
    const { outOfStock } = this.props;
    return (
      <ProductWrapper>
        <ImgContainer outOfStock={outOfStock}>
          <img src="/products/ProductDFull.png" alt="product" />
          <ProductAddToCart outOfStock={outOfStock} />

        </ImgContainer>
        <TextContainer>
          <ProductTitle outOfStock={outOfStock} />
          <ProductPrice outOfStock={outOfStock} />
        </TextContainer>
      </ProductWrapper>
    )
  }
}
export default Product;