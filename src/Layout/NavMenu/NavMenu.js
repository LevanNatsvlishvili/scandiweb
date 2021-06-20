import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AppContext } from 'Store/AppContext';

const StyledLink = styled(NavLink)`
  font-size:16px;
  line-height:19.2px;
  color:#1D1F22;
  padding:0 16px ;
  text-decoration:none;
  text-transform:capitalize;
  &.active {
  color: #5ECE7B;
  border-bottom:1px solid #5ECE7B;
    padding-bottom:30px;
}
`;

class NavMenu extends React.Component {

  render() {
    const used = [];
    const { products } = this.context;
    return (
      <div>
        {products
          .map((product, i) => {
            if (used.indexOf(product.category) === -1) {
              used.push(product.category)
              return (
                <StyledLink key={i} exact to={`/${product.category}`}>{product.category}</StyledLink>
              )
            }

            return false;
          })}
      </div>
    )
  }
}

NavMenu.contextType = AppContext;

export default NavMenu;