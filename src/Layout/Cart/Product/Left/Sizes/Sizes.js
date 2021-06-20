import React from 'react';
import styled from 'styled-components'
import SizesList from './SizesList'

const Sizes = styled.div`
  margin:-4px;
  margin-top:auto;
  flex-wrap: wrap!important;
  display:flex;

`

class ProductSizes extends React.Component {

  render() {
    const { sizes, handleSize, currentSize } = this.props;
    if (Array.isArray(sizes) && sizes[0]) return (
      <Sizes>
        <SizesList
          sizes={sizes}
          handleSize={handleSize}
          currentSize={currentSize}

        />
      </Sizes>
    )

    return null;
  }
}



export default ProductSizes;