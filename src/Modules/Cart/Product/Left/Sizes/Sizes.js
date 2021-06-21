import React from 'react';
import styled from 'styled-components'
import SizesList from './SizesList'


const SizesWrapper = styled.div`
  margin:-4px;
  flex-wrap: wrap!important;
  display:flex;
  margin-top:8px;

`
const Wrapper = styled.div`
  margin-top:auto;
`


class Sizes extends React.Component {

  render() {
    const { sizes, handleSize, currentSize } = this.props;
    if (Array.isArray(sizes) && sizes[0]) return (
      <Wrapper>
        <SizesWrapper>
          <SizesList
            currentSize={currentSize}
            handleSize={handleSize}
            sizes={sizes} />
        </SizesWrapper>
      </Wrapper>
    )

    return null;
  }
}

export default Sizes;
