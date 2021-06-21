import React from "react";
import styled from "styled-components";
import ModalCart from "./CartModalBox";

const AbsoluteBackground = styled.div`
  position: fixed;
  top: 80px;
  margin-top:1px;
  left:0;
  width:100%;
  height:calc(100% - 80px);
  background:rgba(57, 55, 72, 0.22);
`;


class Modal extends React.Component {


  render() {
    const { isModalOpen, handleClose } = this.props;
    if (isModalOpen) return (
      <AbsoluteBackground >
        <ModalCart
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          cordinates={this.ref}>
          {this.props.children}
        </ModalCart>
      </AbsoluteBackground>
    )

    return null;
  }
}



export default Modal;
