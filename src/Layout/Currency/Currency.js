import React, { createRef } from 'react';
import CurrencyOpen from './CurrencyOpen';
import CurrencySelect from './CurrencySelect';
import CurrencyOptions from './CurrencyOptions';
import { api } from 'Api';
import axios from 'axios';


const query = `
{
  currencies
}
`

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.node = createRef();
    this.state = {
      isModalOpen: false,
      value: this.props.defaultValue || options[0],
      currencies: [],
    }
  }

  fetchData = async () => {
    const result = await axios.post(api, { query });
    const resultData = result.data.data.currencies;
    this.setState({ currencies: [...resultData] });
  }

  onClick = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handelClickOutside, false)
    this.fetchData();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handelClickOutside, false)
  }

  handelClickOutside = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    if (this.state.isModalOpen) {
      this.setState({ isModalOpen: false })
    }

  }

  render() {
    const { getValue } = this.props;
    console.log();
    return (
      <div ref={node => this.node = node}>
        <CurrencyOpen
          onClick={this.onClick}
          symbol={this.state.value.symbol}
          currencies={this.state.currencies}
        />

        <CurrencySelect isModalOpen={this.state.isModalOpen}>
          <CurrencyOptions
            close={this.onClick}
            getValue={getValue}
            options={this.state.currencies}
            isModalOpen={this.state.isModalOpen} />
        </CurrencySelect>

      </div>
    )
  }
}

export default Currency;

const options = [
  { value: 'usd', name: '$ USD', symbol: '$' },
  { value: 'eur', name: '€ EUR', symbol: '€' },
  { value: 'jpy', name: '¥ JPY', symbol: '¥' },
]