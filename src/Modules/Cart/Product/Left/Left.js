import React from 'react';
import LeftTitle from './LeftTitle'
import LeftPrice from './LeftPrice'
import Sizes from './Sizes'

class Left extends React.Component {


  render() {
    const { title, type, sizes, handleSize, currentSize } = this.props;
    return (
      <div>
        <LeftTitle title={title} type={type} />
        <LeftPrice price='$50.00' />
        <Sizes
          currentSize={handleSize}
          handleSize={currentSize}
          sizes={sizes}
        />
      </div>
    )
  }
}
export default Left;
