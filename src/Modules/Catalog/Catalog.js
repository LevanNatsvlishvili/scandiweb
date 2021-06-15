import React from 'react';
import Product from './Components/Product/';
import styled from 'styled-components'
import { Grid, GridItem } from 'Components/Grid'

const ProductCatalog = styled.div`
    margin-top:100px;
`

class Catalog extends React.Component {


  render() {
    return (
      <div className="Homepage">
        <h1>Catalog</h1>
        <ProductCatalog>

          <Grid>
            <GridItem col={4}>
              <Product />

            </GridItem>
            <GridItem col={4}>
              <Product outOfStock={true} />

            </GridItem>
            <GridItem col={4}>
              <Product />

            </GridItem>
          </Grid>
        </ProductCatalog>

      </div>
    )
  }
}
export default Catalog;