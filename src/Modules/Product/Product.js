import React from 'react';
import { Grid, GridItem } from 'Components/Grid';
import { AppContext } from 'Store/AppContext';
import { api } from 'Api';
import axios from 'axios';
import ImgViewer from './ImgViewer';
import Details from './Details';


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
}
`

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {}
    }
  }

  fetchData = async () => {
    const result = await axios.post(api, { query });
    const resultData = result.data.data.category.products;
    this.setState({ current: resultData[this.props.match.params.id] });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { name, prices, category, description, attributes, gallery } = this.state.current;
    const { addToCart } = this.context;
    // console.log(this.state.current);
    return (
      <div>
        <Grid>
          <GridItem col={7}>
            <ImgViewer
              gallery={gallery}
            />
          </GridItem>
          <GridItem col={5}>
            <Details
              attributes={attributes}
              category={category}
              name={name}
              prices={prices}
              desc={description}
              addToCart={() => addToCart(this.state.current)}
              current={this.state.current}
            />
          </GridItem>
        </Grid>

      </div>
    )
  }
}

Product.contextType = AppContext;

export default Product;