import ButtonBlock from 'Components/Buttons/ButtonBlock';
import Text from 'Components/Text';
import React from 'react';
import styled from 'styled-components'
import DetailsSizesButtons from './DetailsSizesButtons'


const Sizes = styled.div`
  margin:-4px;
  flex-wrap: wrap!important;
  display:flex;
  margin-top:8px;

`
const Wrapper = styled.div`
  margin-top:43px;
`


class DetailsSizes extends React.Component {


  render() {
    const { sizes } = this.props;
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

        <Sizes>
          <DetailsSizesButtons sizes={sizes} />
        </Sizes>
      </Wrapper>
    )
  }
}

export default DetailsSizes;
