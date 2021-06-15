import React, { createRef } from 'react';
import CurrencyOpen from './CurrencyOpen';
import CurrencySelect from './CurrencySelect';
import CurrencyOptions from './CurrencyOptions';


class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.node = createRef();
    this.state = {
      isModalOpen: false,
      value: this.props.defaultValue || options[0],
    }
    document.addEventListener('mousedown', this.handelClickOutside, false)
    document.removeEventListener('mousedown', this.handelClickOutside, false)

  }

  onClick = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  getValue = (newValue) => {
    this.setState({ value: newValue })
  }

  Search = (array, desiredValue) => {
    return array.find(({ value }) => value === desiredValue)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handelClickOutside, false)
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

    return (
      <div ref={node => this.node = node}>
        <CurrencyOpen
          onClick={this.onClick}
          symbol={this.state.value.symbol}
        />

        <CurrencySelect isModalOpen={this.state.isModalOpen}>
          <CurrencyOptions
            close={this.onClick}
            getValue={this.getValue}
            options={options}
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