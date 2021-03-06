import React from "react";
import styled from "styled-components";

const SelectField = styled.div`
  position: absolute;
  background:#fff;
  width:114px;
  margin-top:10px;
  margin-left:-50px;
  min-height:100px;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  z-index:999;
`;

class CurrencySelect extends React.Component {

  render() {
    const { isModalOpen } = this.props;
    if (isModalOpen) return (
      <SelectField>
        {this.props.children}
      </SelectField>
    )

    return null;
  }
}

export default CurrencySelect;