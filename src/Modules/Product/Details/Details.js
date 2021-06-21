import React from 'react';
import styled from 'styled-components';
import DetailsTitle from './DetailsTitle';
import DetailsPrice from './DetailsPrice';
import DetailsAddToCart from './DetailsAddToCart';
import DetailsDescription from './DetailsDescription';
import DetailsAttributes from './Attributes';

const DetailsWrapper = styled.div`
  padding-left:100px;
  width:100%;
  max-width:400px;
  ${props => props.theme.breakpoints.md}{
    padding-left:0px;
    max-width:100%;
  
  }
`

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSize: {},
    }
    this.setState = this.setState.bind(this);

  }

  handleSize = (val) => {
    this.setState({ currentSize: val });
  }

  render() {
    const { prices, name, category, desc, attributes, addToCart, } = this.props;
    return (
      <DetailsWrapper>
        <DetailsTitle title={name} type={category} />

        <DetailsAttributes
          currentSize={this.state.currentSize}
          handleSize={this.handleSize}
          attributes={attributes} />

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