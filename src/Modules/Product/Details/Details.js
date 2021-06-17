import React from 'react';
import styled from 'styled-components'
import DetailsTitle from './DetailsTitle'
import DetailsPrice from './DetailsPrice'
import DetailsAddToCart from './DetailsAddToCart'
import DetailsDescription from './DetailsDescription'
import DetailsSizes from './Sizes/'

const DetailsWrapper = styled.div`
  padding-left:100px;
  width:100%;
  max-width:400px;
`

class Details extends React.Component {
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
    return (
      <DetailsWrapper>
        <DetailsTitle title='Apollo' type='Running Shorts' />

        <DetailsSizes
          currentSize={this.state.currentSize}
          handleSize={this.handleSize}
          sizes={sizes} />

        <DetailsPrice price='$50.00' />

        <DetailsAddToCart />

        <DetailsDescription />
      </DetailsWrapper>
    )
  }
}

export default Details;

const sizes = [
  { name: 'XS', disabled: false, value: 'xs' },
  { name: 'S', disabled: false, value: 's' },
]