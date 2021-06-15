import React from "react";
import styled from "styled-components";



const Cart = styled.div`
  position: absolute;
  top: 0px;
  right:6vw;
  background:#fff;
  width:325px;
  min-height:540px;
  padding:16px;
`;



class ModalCart extends React.Component {

  render() {
    return (
      <Cart>
        {this.props.children}
      </Cart>
    )
  }
}



export default ModalCart;
