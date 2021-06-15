import React from 'react';
import styled from 'styled-components'

const CustomText = styled.p`
  font-size:${props => props.fontSize || '16px'};
  line-height:${props => props.lineHeight || '19.2px'};
  color:${props => props.theme.colors[props.color] || 'black'};
  font-weight:${props => props.fontWeight || '400'};
  margin:${props => props.margin};
  text-align:${props => props.align}
}
`;

class Text extends React.Component {

  render() {
    const { color, fontWeight, fontSize, lineHeight, margin, align, ...rest } = this.props;

    return (
      <CustomText
        margin={margin}
        color={color}
        fontWeight={fontWeight}
        fontSize={fontSize}
        lineHeight={lineHeight}
        align={align}
        {...rest}
      >
        {this.props.children}
      </CustomText>
    )
  }
}
export default Text;