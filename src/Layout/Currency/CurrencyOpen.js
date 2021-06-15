import React from "react";
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


class CurrencyOpen extends React.Component {


  render() {
    const { symbol } = this.props;
    return (
      <Button onClick={this.props.onClick} {...this.props.rest}>
        {symbol}
      </Button>
    )
  }
}



export default CurrencyOpen;
