import React from 'react';
import styled from 'styled-components'
import NavMenu from './NavMenu'
import LayoutBrand from './LayoutBrand'
import { Grid, GridItem } from 'Components/Grid';
import Cart from './Cart';
import Currency from './Currency';

const LayoutContainer = styled.nav`
  background: #fff;
  min-height:80px;
  padding:0 100px ;
  display:flex;

`

const Main = styled.div`
  background: #fff;
  min-height:80px;
  padding:0 100px ;
  margin-top:80px;
`

const ButtonsWrapper = styled.div`
  margin-left:auto;
  display:flex;
`

const Spacing = styled.div`
  margin:0 10px;
  display:flex;
`

class Layout extends React.Component {

  render() {
    return (
      <>
        <LayoutContainer >
          <Grid >
            <GridItem align='center' col={3}>
              <NavMenu />
            </GridItem>
            <GridItem align='center' col={6}>
              <LayoutBrand />
            </GridItem>
            <GridItem align='center' col={3}>
              <ButtonsWrapper>
                <Spacing>
                  <Currency />
                </Spacing>
                <Spacing>
                  <Cart />
                </Spacing>
              </ButtonsWrapper>
            </GridItem>
          </Grid>
        </LayoutContainer>
        <Main>
          {this.props.children}
        </Main>
      </>
    )
  }
}
export default Layout;