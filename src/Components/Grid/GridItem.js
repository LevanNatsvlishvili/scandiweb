import React from 'react';
import styled from 'styled-components'


const Item = styled.div`
    flex-grow: 0;
    max-width:calc(100% / (12 /${props => props.col || 2}));
    flex-basis:calc(100% / (12 /${props => props.col || 2}));
    display:${props => props.col === 0 ? 'none' : 'flex'};
    align-items:${props => props.align};
    ${[props => props.theme.breakpoints.md]} {
      max-width:calc(100% / (12 /${props => props.md || props.col || 2}));
      flex-basis:calc(100% / (12 /${props => props.md || props.col || 2}));
      display:${props => props.md === 0 ? 'none' : 'flex'};
    }
    ${[props => props.theme.breakpoints.sm]} {
      max-width:calc(100% / (12 /${props => props.xs || props.sm || props.md || props.col || 2}));
      flex-basis:calc(100% / (12 /${props => props.xs || props.sm || props.md || props.col || 2}));
      display:${props => props.xs === 0 || props.md === 0 || props.col === 0 ? 'none' : 'flex'};
    }
    ${[props => props.theme.breakpoints.xs]} {
      max-width:calc(100% / (12 /${props => props.xs || props.sm || props.md || props.col || 2}));
      flex-basis:calc(100% / (12 /${props => props.xs || props.sm || props.md || props.col || 2}));
      display:${props => props.xs === 0 || props.md === 0 || props.col === 0 ? 'none' : 'flex'};
    }
`


class GridItem extends React.Component {


  render() {
    const { col, md, xs, sm, align } = this.props;
    return (
      <Item
        align={align}
        className='grid-item'
        col={col}
        md={md}
        sm={sm}
        xs={xs}
      >
        {this.props.children}
      </Item>
    )
  }
}
export default GridItem;