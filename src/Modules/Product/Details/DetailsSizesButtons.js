import ButtonBlock from 'Components/Buttons/ButtonBlock';
import React from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  padding:4px;
`

class DetailsSizes extends React.Component {


  render() {
    const { sizes } = this.props;
    if (Array.isArray(sizes)) return (
      sizes.map((size, index) => (
        <ButtonWrapper key={index}>
          <Button
            active={true}
            disabled={size.disabled}>
            {size.name}
          </Button>
        </ButtonWrapper>
      ))
    )

    return false;
  }
}

class Button extends React.Component {


  render() {
    const { children, active, sizes, ...rest } = this.props;
    return (

      <ButtonBlock
        width='63px'
        height='45px'
        background={active ? 'text' : null}
        color={active ? 'white' : null}
        {...rest}
      >
        {children}
      </ButtonBlock>
    )

  }
}

export default DetailsSizes;
