import React from 'react';
import styled from 'styled-components'
import Modal from './CartModal';
import CartMyBag from './CartMyBag';
import CartButton from './CartButton';
import CartTotal from './CartTotal';
import Product from './Product';
import CartCheckout from './CartCheckout';
import { AppContext } from 'Store/AppContext';

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

  handleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }


  handleClose = () => {
    this.setState({ isModalOpen: false });
  }

  // calculateTotal = () => {
  //   let i;
  //   cart.map((item)=> {
  //     i = i + item;
  //   })
  // }

  render() {
    const { cart } = this.context;
    return (
      <div>
        <CartButton
          number={cart.length}
          onClick={this.handleModal}
        />
        <Modal
          handleClose={this.handleClose}
          isModalOpen={this.state.isModalOpen}
        >
          <CartMyBag items={cart.length} />

          <ProductContainer>

            {cart.map((product, i) => (
              <Product
                key={i}
                product={product}
              />
            ))}
          </ProductContainer>
          <CartTotal cart={cart} />
          <CartCheckout />
        </Modal>

      </div>
    )
  }
}
Cart.contextType = AppContext;

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