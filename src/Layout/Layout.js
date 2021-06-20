import React from 'react';
import styled from 'styled-components'
import NavMenu from './NavMenu'
import LayoutBrand from './LayoutBrand'
import { Grid, GridItem } from 'Components/Grid';
import Cart from './Cart';
import LayoutCurrency from './LayoutCurrency';

const LayoutContainer = styled.nav`
  background: #fff;
  min-height:80px;
  padding:0 100px ;
  display:flex;
  position:fixed;
  z-index: 1200;
    position: fixed;
    top: 0;
    width: 100%;

`

const Main = styled.div`
  background: #fff;
  min-height:80px;
  padding:0 100px ;
  margin-top:160px;
`

const ButtonsWrapper = styled.div`
  margin-left:auto;
  display:flex;
  align-items:center
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
          <Grid align='center'>
            <GridItem col={3}>
              <NavMenu />
            </GridItem>
            <GridItem col={6}>
              <LayoutBrand />
            </GridItem>
            <GridItem col={3}>
              <ButtonsWrapper>
                <Spacing>
                  <LayoutCurrency />
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