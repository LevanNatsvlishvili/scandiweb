import React from 'react';
import styled from 'styled-components'
import DetailsSizesButtons from './SizesList'


const SizesWrapper = styled.div`
  margin:-4px;
  flex-wrap: wrap!important;
  display:flex;
  margin-top:8px;

`
const Wrapper = styled.div`
  margin-top:12px;
`


class Sizes extends React.Component {

  render() {
    const { sizes, handleSize, currentSize } = this.props;
    return (
      <Wrapper>
        <SizesWrapper>
          <DetailsSizesButtons
            currentSize={currentSize}
            handleSize={handleSize}
            sizes={sizes} />
        </SizesWrapper>
      </Wrapper>
    )
  }
}

export default Sizes;
