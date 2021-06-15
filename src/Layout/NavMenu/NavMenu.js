import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Url from 'Paths'

const StyledLink = styled(NavLink)`
  font-size:16px;
  line-height:19.2px;
  color:#1D1F22;
  padding:0 16px ;
  text-decoration:none;
  &.active {
  color: #5ECE7B;
  border-bottom:1px solid #5ECE7B;
    padding-bottom:30px;
}
`;

class NavMenu extends React.Component {

  render() {
    return (
      <div>
        <StyledLink exact to={Url.CATALOG}>Women</StyledLink>
        <StyledLink exact to='Men'>Men</StyledLink>
        <StyledLink exact to='Kids'>Kids</StyledLink>
      </div>
    )
  }
}
export default NavMenu;