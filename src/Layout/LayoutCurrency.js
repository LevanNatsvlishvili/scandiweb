import React from 'react';
import { AppContext } from 'Store/AppContext';
import Currency from './Currency';


class LayoutCurrency extends React.Component {

  render() {
    const { getValue } = this.context;
    return (
      <Currency
        getValue={getValue}
      />
    )
  }
}

LayoutCurrency.contextType = AppContext;

export default LayoutCurrency;