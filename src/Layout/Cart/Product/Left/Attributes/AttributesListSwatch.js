import React from 'react';
import styled from 'styled-components'
import SizesListButton from './Buttons/ButtonCube'

const ButtonWrapper = styled.div`
  padding:4px;
`

class SizesList extends React.Component {


  render() {
    const { items, handleSize, currentSize } = this.props;
    console.log(items);
    if (Array.isArray(items)) return (
      items.map((item, index) => {
        return (
          <ButtonWrapper key={index}>
            <SizesListButton
              style={{ background: item.value }}
              background={item.value}
              activeBorder={item === currentSize ? true : false}
              active={item === currentSize ? true : false}
              onClick={() => handleSize(item)}
              disabled={item.disabled}>
              {/* {item.displayValue} */}
            </SizesListButton>
          </ButtonWrapper>
        )
      })

      // .items.map((size, index) => (
      //   <ButtonWrapper key={index}>
      //     <SizesListButton
      //       active={size === currentSize ? true : false}
      //       onClick={() => handleSize(size)}
      //       disabled={size.disabled}>
      //       {size.displayValue}
      //     </SizesListButton>
      //   </ButtonWrapper>
      // ))
    )

    // if (Array.isArray(sizes)) return (
    //   sizes[0].items.map((size, index) => (
    //     <ButtonWrapper key={index}>
    //       <SizesListButton
    //         active={size === currentSize ? true : false}
    //         onClick={() => handleSize(size)}
    //         disabled={size.disabled}>
    //         {size.displayValue}
    //       </SizesListButton>
    //     </ButtonWrapper>
    //   ))
    // )

    return false;
  }
}


export default SizesList;