import React from 'react';
import styled from 'styled-components'
import { Grid } from 'Components/Grid'
import { AppContext } from 'Store/AppContext';
import CatalogList from './CatalogList';

const ProductCatalog = styled.div`
    margin-top:100px;
`
const H1 = styled.h1`
    text-transform:capitalize;
`


class Catalog extends React.Component {

  render() {
    const { products } = this.context;
    return (
      <div className="Homepage">
        <H1>{this.props.match.params.id}</H1>
        <ProductCatalog>

          <Grid>
            <CatalogList category={this.props.match.params.id} products={products} />
          </Grid>
        </ProductCatalog>

      </div>
    )
  }
}

Catalog.contextType = AppContext;

export default Catalog;