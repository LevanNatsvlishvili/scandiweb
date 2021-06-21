import React from 'react';
import { AppContext } from 'Store/AppContext';
import styled from 'styled-components'
import Product from './Product'

const List = styled.div`
  margin-top:60px;

`
class CartList extends React.Component {


  render() {
    const { cart } = this.context
    return (
      <List>
        {cart.map((product, i) => {
          return (
            <Product
              key={i}
              title={product.name}
              type={product.category}
              prices={product.prices}
              img='/products/ProductAFull.png'
              images={product.gallery}
              attributes={product.attributes}
            />

          )
        })}
      </List>
    )
  }
}

CartList.contextType = AppContext;

export default CartList;