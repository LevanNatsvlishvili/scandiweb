import React from 'react';
import styled from 'styled-components'
import Product from './Product'

const List = styled.div`
  margin-top:60px;

`
class CartList extends React.Component {


  render() {
    return (
      <List>
        <Product
          title='Appolo'
          type='Running Shorts'
          img='/products/ProductAFull.png'
          images={images}
        />
      </List>
    )
  }
}
export default CartList;

const images = [
  '/products/ProductAFull.png',
  '/products/ProductBFull.png',
]