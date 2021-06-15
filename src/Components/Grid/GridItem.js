import React from 'react';
import styled from 'styled-components'


const Item = styled.div`
    flex-grow: 0;
      max-width:calc(100% / (12 /${props => props.col || 2}));
      flex-basis:calc(100% / (12 /${props => props.col || 2}));
    display:flex;
    align-items:${props => props.align};
`


class GridItem extends React.Component {


  render() {
    const { col, align } = this.props;
    return (
      <Item
        align={align}
        className='grid-item'
        col={col}>
        {this.props.children}
      </Item>
    )
  }
}
export default GridItem;