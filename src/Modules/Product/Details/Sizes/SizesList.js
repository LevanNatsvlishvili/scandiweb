import React from 'react';
import styled from 'styled-components'
import SizesListButton from './SizesListButton'

const ButtonWrapper = styled.div`
  padding:4px;
`

class SizesList extends React.Component {


  render() {
    const { sizes, handleSize, currentSize } = this.props;
    if (Array.isArray(sizes)) return (
      sizes.map((size, index) => (
        <ButtonWrapper key={index}>
          <SizesListButton
            active={size === currentSize ? true : false}
            onClick={() => handleSize(size)}
            disabled={size.disabled}>
            {size.name}
          </SizesListButton>
        </ButtonWrapper>
      ))
    )

    return false;
  }
}


export default SizesList;