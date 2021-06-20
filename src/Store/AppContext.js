import React, { createContext } from 'react';
import { api } from 'Api';
import axios from 'axios';

export const AppContext = createContext({});

const query = `
{
  category{
    
    products{
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency
        amount
      }
    }
  }
  currencies
}
`

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      activeCurrency: 'USD',
      cart: [],
    }
    this.setState = this.setState.bind(this);
  }

  getValue = (newValue) => {
    this.setState({ activeCurrency: newValue });
  }

  addToCart = (newValue) => {
    this.setState({ cart: [newValue, ...this.state.cart] });
  }

  fetchData = async () => {
    const result = await axios.post(api, { query });
    const resultData = result.data.data;
    // console.log(result.data.data.category.products)
    this.setState({ products: [...resultData.category.products], currencies: [...resultData.currencies] });


    // return resultData;
  }

  componentDidMount() {
    this.fetchData()
  }
  render() {
    // const { data, loading, error } = useproductsQuery(productsQuery);
    const test = 'test'
    console.log(this.state.products);
    return (
      <AppContext.Provider
        value={{
          test,
          products: this.state.products,
          getValue: this.getValue,
          activeCurrency: this.state.activeCurrency,
          addToCart: this.addToCart,
          cart: this.state.cart
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppContextProvider;
