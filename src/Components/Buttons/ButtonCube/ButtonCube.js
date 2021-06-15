import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid ${props => !props.disabled ? props.theme.colors[props.borderColor || 'text'] : '#A6A6A6'};
  width:${props => props.size || '24px'};
  height:${props => props.size || '24px'};
  color:${props => props.theme.colors[props.color || 'text']};
  background:${props => props.theme.colors[props.background || 'transparent']};
  font-size:${props => props.fontSize || '14px'} ;
  line-height:22.4px;
  font-weight:400; 
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:${props => !props.disabled ? 'pointer' : 'default'};
    &:before{
    position:absolute;
    content:'';
    display:${props => !props.disabled ? 'none' : 'unset'};
    background:rgba(166, 166, 166, 0.2);
    width:${props => props.size || '24px'};
    height:${props => props.size || '24px'};
    box-sizing:border-box;
    top:-1px;
    left:-1px;
}
`

class ButtonCube extends React.Component {
  render() {
    const { children, size, borderColor, fontSize, disabled, ...rest } = this.props;
    return (
      <Button
        size={size}
        border={borderColor}
        disabled={disabled}
        fontSize={fontSize}
        type='button'
        {...rest}
      >
        {children}
      </Button>
    )
  }
}
export default ButtonCube;