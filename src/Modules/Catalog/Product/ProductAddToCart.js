import React from 'react';
import styled from 'styled-components'


const AddToCart = styled.button`
  width:52px;
  height:52px;
  background:${props => props.theme.colors.primary};
  border-radius:50%;
  border:none;
  right:15px;
  bottom:-18px;
  position:absolute;
  cursor:pointer;
  display:none;
  & img {
    width:24px;
    height:24px;
  }
`

class ProductAddToCart extends React.Component {

  render() {
    const { outOfStock } = this.props;
    if (!outOfStock) return (
      <AddToCart>
        <img src="/icons/cart/cartWhite.svg" alt="cart" />
      </AddToCart>
    )

    return false;
  }
}
export default ProductAddToCart;