import { Grid, GridItem } from 'Components/Grid';
import React from 'react';
import styled from 'styled-components'
import Left from './Left'
import Right from './Right'

const ProductWrapper = styled.div`
  margin-top:25px;
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
    const { product, } = this.props
    console.log(product);
    return (
      <ProductWrapper>
        <Grid >
          <GridItem col={6}>
            <Left
              title={product.name}
              prices={product.prices}
              sizes={product.attributes}
              currentSize={this.state.currentSize}
              handleSize={this.handleSize}
            />
          </GridItem>
          <GridItem col={6}>
            <Right
              img={product.gallery}
            />
          </GridItem>


        </Grid>
      </ProductWrapper>
    )
  }
}
export default Product;