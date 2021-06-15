import { Grid, GridItem } from 'Components/Grid';
import React from 'react';
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const ProductWrapper = styled.div`
  margin-top:25px;
`


class Product extends React.Component {

  render() {
    const { product, } = this.props
    return (
      <ProductWrapper>
        <Grid >
          <GridItem col={6}>
            <Left
              title={product.title}
              price={product.price}
              sizes={product.sizes}
            />
          </GridItem>
          <GridItem col={6}>
            <Right
              img={product.img}
            />
          </GridItem>


        </Grid>
      </ProductWrapper>
    )
  }
}
export default Product;