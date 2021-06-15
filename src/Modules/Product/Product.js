import React from 'react';
import { Grid, GridItem } from 'Components/Grid';
import ImgViewer from './ImgViewer';
import Details from './Details';



class Product extends React.Component {


  render() {
    return (
      <div>
        <Grid>
          <GridItem col={7}>
            <ImgViewer />
          </GridItem>
          <GridItem col={5}>
            <Details />
          </GridItem>
        </Grid>

      </div>
    )
  }
}
export default Product;