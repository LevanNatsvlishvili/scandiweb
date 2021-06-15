import React from "react";
import styled from "styled-components";
import ModalCart from "./CartModalBox";

const AbsoluteBackground = styled.div`
  position: absolute;
  top: 80px;
  left:0;
  width:100%;
  height:calc(100% - 80px);
  background:rgba(57, 55, 72, 0.22);
`;


class Modal extends React.Component {


  render() {
    const { isModalOpen } = this.props;
    if (isModalOpen) return (
      <AbsoluteBackground >
        <ModalCart cordinates={this.ref}>
          {this.props.children}
        </ModalCart>
      </AbsoluteBackground>
    )

    return false;
  }
}



export default Modal;
