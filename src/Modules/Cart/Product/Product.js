import React from 'react';
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'


const CartProduct = styled.div`
  border-top:1px solid #E5E5E5;
  height:225px;
  padding:20px 0;
  display:flex;
`


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSize: {},
    }
  }

  handleSize = (val) => {
    this.setState({ currentSize: val });
  }

  render() {
    const { title, type, img, images } = this.props;
    return (
      <CartProduct>
        <Left
          currentSize={this.state.currentSize}
          handleSize={this.handleSize}
          sizes={sizes}
          title={title}
          type={type}
        />

        <Right
          img={img}
          images={images}
        />
      </CartProduct >
    )
  }
}
export default Product;

const sizes = [
  { name: 'XS', disabled: false, value: 'xs' },
  { name: 'S', disabled: false, value: 's' },
]