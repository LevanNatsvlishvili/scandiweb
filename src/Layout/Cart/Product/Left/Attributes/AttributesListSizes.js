import React from 'react';
import styled from 'styled-components'
import SizesListButton from './Buttons/ButtonCube'

const ButtonWrapper = styled.div`
  padding:4px;
`

class SizesList extends React.Component {


  render() {
    const { items, handleSize, currentSize } = this.props;
    if (Array.isArray(items)) return (
      items.map((item, index) => (
        <ButtonWrapper key={index}>
          <SizesListButton
            active={item === currentSize ? true : false}
            onClick={() => handleSize(item)}
            disabled={item.disabled}>
            {item.value}
          </SizesListButton>
        </ButtonWrapper>
      ))
    )

    return false;
  }
}


export default SizesList;