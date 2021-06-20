import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  background: transparent;
  border: none;
  margin-left:auto;
  cursor:pointer;
  position:relative;
  &:after{
    content:'${props => props.number}';
    top: -10px;
    left: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    position: absolute;
    background: ${props => props.theme.colors.text};
    color:#fff;
    align-items: center;
    border-radius: 50%;
    justify-content: center;
  }
`;


class CartButton extends React.Component {

  render() {
    const { number } = this.props;
    return (
      <Button number={number} onClick={this.props.onClick} {...this.props.rest}>
        <img src="/icons/cart/cartBlack.svg" alt="cart" />
      </Button>
    )
  }
}



export default CartButton;
