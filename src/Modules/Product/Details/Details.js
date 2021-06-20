import React from 'react';
import styled from 'styled-components';
import DetailsTitle from './DetailsTitle';
import DetailsPrice from './DetailsPrice';
import DetailsAddToCart from './DetailsAddToCart';
import DetailsDescription from './DetailsDescription';
import DetailsSizes from './Sizes/';

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
    const { prices, name, category, desc, attributes, addToCart } = this.props;
    return (
      <DetailsWrapper>
        <DetailsTitle title={name} type={category} />

        <DetailsSizes
          currentSize={this.state.currentSize}
          handleSize={this.handleSize}
          sizes={attributes} />

        <DetailsPrice
          prices={prices}
        // currency={prices[0].currency}
        // price={prices[0].amount} 
        />

        <DetailsAddToCart addToCart={addToCart} />

        <DetailsDescription
          desc={desc}
        />
      </DetailsWrapper>
    )
  }
}

export default Details;