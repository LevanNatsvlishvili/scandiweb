import Text from 'Components/Text';
import ButtonCube from 'Components/Buttons/ButtonCube';
import React from 'react';
import styled from 'styled-components'

const QuantityWrapper = styled.div`
  width:24px;
  display:flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

class ProductSizes extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1,
    }
  }

  componentDidMount() {
    document.quantity = this.state.quantity;
  }
  componentDidUpdate() {
    document.quantity = this.state.quantity;
  }

  plus() {
    this.setState({ quantity: this.state.quantity + 1 })
  }

  minus() {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 })
    }
  }

  render() {
    return (
      <QuantityWrapper>
        <ButtonCube
          onClick={this.plus.bind(this)}
          fontSize='28px'>
          +
        </ButtonCube>
        <Text
          fontWeight='500'
          fontSize='16px'
          lineHeight='25.6px'
          align='center'
        >
          {this.state.quantity}
        </Text>
        <ButtonCube
          onClick={this.minus.bind(this)}
          fontSize='28px'>
          -
        </ButtonCube>
      </QuantityWrapper>
    )
  }
}



export default ProductSizes;