import React from 'react';
import styled from 'styled-components'


const GridCont = styled.div`
    // width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding:0!important;
    margin:0;
    width: 100%;
    align-items:${props => props.align};
    margin:calc((${props => props.spacing} * 4px) * -1);
    width: calc(100% + (${props => props.spacing} * 4px));
    & .grid-item {
      padding: calc( ${props => props.spacing || 1}*4px);
    },

`
class Grid extends React.Component {

  render() {
    const { spacing, align } = this.props;
    return (
      <GridCont align={align} spacing={spacing}>
        {this.props.children}
      </GridCont>
    )
  }
}
export default Grid;