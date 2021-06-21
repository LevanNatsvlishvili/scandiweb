import React from "react";
import { AppContext } from "Store/AppContext";
import styled from "styled-components";
import { currencies } from 'Utils/Objects';

const Button = styled.button`
  width: fit-content;
  background: transparent;
  font-size:18px;
  color:${props => props.theme.colors.text};
  font-weight:500;
  line-height:28.8px;
  border: none;
  margin-left:auto;
  cursor:pointer;
  position:relative;
`;

class CurrencyOpen extends React.Component {


  render() {
    const { currency } = this.props;
    const { activeCurrency } = this.context;
    if (Array.isArray(currency)) return (
      currency
        .filter(currency => currency === activeCurrency)
        .map((currency, i) => {
          return (
            <Button key={i} onClick={this.props.onClick} {...this.props.rest}>
              {currencies[currency]}
            </Button >
          )
        })
    )

    return null;
  }
}

CurrencyOpen.contextType = AppContext;

export default CurrencyOpen;
