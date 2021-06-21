import React from 'react';
import styled from 'styled-components'
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import { Grid, GridItem } from 'Components/Grid';
import { Link } from 'react-router-dom';
import Url from 'Router/Paths';

const Buttons = styled.div`
  margin-top:35px;
`

class CartCheckout extends React.Component {

  render() {
    return (
      <Buttons>
        <Grid >
          <GridItem col={6}>
            <ButtonBlock
              fontWeight='600'
              fontSize='14px'
              lineHeight='16.8px'
              as={Link}
              // exact={true}
              to={Url.CART}
            >
              VIEW BAG
            </ButtonBlock>

          </GridItem>
          <GridItem col={6}>
            <ButtonBlock
              borderColor='primary'
              fontWeight='600'
              color='white'
              fontSize='14px'
              lineHeight='16.8px'
              background='primary'>
              CHECK OUT
            </ButtonBlock>

          </GridItem>

        </Grid>
      </Buttons>
    )
  }
}

export default CartCheckout;