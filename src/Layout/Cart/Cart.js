import React from 'react';
import styled from 'styled-components'
import Modal from './CartModal';
import CartMyBag from './CartMyBag';
import CartButton from './CartButton';
import CartTotal from './CartTotal';
import Product from './Product';
import CartCheckout from './CartCheckout';

const ProductContainer = styled.div`
  height:370px;
  overflow:auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  
`

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.cord = 0;
    this.state = {
      isModalOpen: false,
    }
  }
  render() {
    return (
      <>
        <CartButton
          onClick={() => this.setState({ isModalOpen: !this.state.isModalOpen })}
        />
        <Modal
          isModalOpen={this.state.isModalOpen}
        >
          <CartMyBag />

          <ProductContainer>

            {products.map((product, i) => (
              <Product
                key={i}
                product={product}
              />
            ))}
          </ProductContainer>
          <CartTotal />
          <CartCheckout />
        </Modal>

      </>
    )
  }
}

export default Cart;

const products = [
  {
    title: 'Apollo Running Short',
    price: '$50.00',
    img: '/products/productD.png',
    sizes: [
      { name: 'S', disabled: false },
      { name: 'M', disabled: true },
    ]
  },
  {
    title: 'Apollo Running Short',
    price: '$50.00',
    img: '/products/productD.png',
    sizes: [
      { name: 'S', disabled: false },
      { name: 'M', disabled: true },
    ]
  },
  {
    title: 'Apollo Running Short',
    price: '$50.00',
    img: '/products/productD.png',
    sizes: [
      { name: 'S', disabled: false },
      { name: 'M', disabled: true },
    ]
  },
]