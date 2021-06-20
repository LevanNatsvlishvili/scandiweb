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
  z-index:1000;
`;



class ModalCart extends React.Component {
  onClick = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  getValue = (newValue) => {
    this.setState({ value: newValue })
  }

  Search = (array, desiredValue) => {
    return array.find(({ value }) => value === desiredValue)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handelClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handelClickOutside, false)
  }

  handelClickOutside = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    if (this.props.isModalOpen) {
      this.props.handleClose();
    }

  }

  render() {
    return (
      <Cart ref={node => this.node = node}>
        {this.props.children}
      </Cart>
    )
  }
}



export default ModalCart;
