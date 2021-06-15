import ButtonCube from 'Components/Buttons/ButtonCube';
import React from 'react';
import styled from 'styled-components'

const Sizes = styled.div`
margin:-4px;
  margin-top:auto;
  flex-wrap: wrap!important;
  display:flex;

`
const ButtonWrapper = styled.div`
  padding:4px;
`

class ProductSizes extends React.Component {

  render() {
    const { sizes } = this.props;
    return (
      <Sizes>
        {sizes.map((size, index) => (
          <ButtonWrapper>
            <ButtonCube key={index} disabled={size.disabled}>
              {size.name}
            </ButtonCube>
          </ButtonWrapper>
        ))}
      </Sizes>
    )
  }
}



export default ProductSizes;