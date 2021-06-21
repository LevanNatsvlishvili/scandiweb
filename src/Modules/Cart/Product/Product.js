import React from 'react';
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'


const CartProduct = styled.div`
  border-top:1px solid #E5E5E5;
  height:225px;
  padding:20px 0;
  display:flex;
  ${[props => props.theme.breakpoints.sm]} {
    flex-direction:column;
    height:auto;
  }
`


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSize: {},
    }
    this.setState = this.setState.bind(this);
  }

  handleSize = (val) => {
    this.setState({ currentSize: val });
  }

  render() {
    const { title, type, img, images, prices, attributes } = this.props;
    return (
      <CartProduct>
        <Left
          currentSize={this.state.currentSize}
          handleSize={this.handleSize}
          sizes={sizes}
          title={title}
          type={type}
          prices={prices}
          attributes={attributes}
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