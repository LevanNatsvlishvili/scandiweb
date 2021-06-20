import React from "react";
import { AppContext } from "Store/AppContext";
import styled from "styled-components";

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

const currencySymbols = {
  USD: '$',
  GBP: '£',
  JPY: '¥',
  AUD: '$',
  RUB: '₽',
}


class CurrencyOpen extends React.Component {


  render() {
    const { currencies } = this.props;
    const { activeCurrency } = this.context;
    if (Array.isArray(currencies)) return (
      currencies
        .filter(currency => currency === activeCurrency)
        .map((currency, i) => {
          return (
            <Button key={i} onClick={this.props.onClick} {...this.props.rest}>
              {currencySymbols[currency]}
            </Button >
          )
        })
    )

    return null;
  }
}

CurrencyOpen.contextType = AppContext;

export default CurrencyOpen;
