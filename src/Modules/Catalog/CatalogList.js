import React from 'react';
import Product from './Product';
import { GridItem } from 'Components/Grid'
import { AppContext } from 'Store/AppContext';



class CatalogList extends React.Component {

  render() {
    const { products, category } = this.props;
    const { activeCurrency } = this.context;

    if (Array.isArray(products) && products) return (
      products
        .filter(product => product.category === category)
        .map((product, index) => {
          return (
            <GridItem key={index} col={4}>
              <Product
                id={index}
                img={product.gallery[0]}
                title={product.name}
                prices={product.prices}
                currency={product.prices[activeCurrency]}
                price={product.prices[activeCurrency]}
                outOfStock={!product.inStock} />
            </GridItem>
          )
        })
    )

    return null;
  }
}

CatalogList.contextType = AppContext;

export default CatalogList;