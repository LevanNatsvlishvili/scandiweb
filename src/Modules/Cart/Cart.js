import React from 'react';
import CartTitle from './CartTitle'
import CartList from './CartList'


class Product extends React.Component {


  render() {
    return (
      <div>
        <CartTitle />

        <CartList />
      </div>
    )
  }
}
export default Product;
