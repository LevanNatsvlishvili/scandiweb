import Text from 'Components/Text';
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
  margin-top:43px;
`


class Sizes extends React.Component {

  render() {
    const { sizes, handleSize, currentSize } = this.props;
    return (
      <Wrapper>
        <Text
          fontWeight='700'
          fontSize='18px'
          lineHeight='18px'
          color='text'
          fontFamily='roboto'
        >
          SIZE:
        </Text>

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
