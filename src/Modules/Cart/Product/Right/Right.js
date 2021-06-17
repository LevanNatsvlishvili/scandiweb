import React from 'react';
import styled from 'styled-components'
import RightQuantity from './RightQuantity'
import RightImg from './RightImg'


const Wrapper = styled.div`
  margin-left:auto;
  display:flex;
`

class Right extends React.Component {


  render() {
    const { img, images } = this.props;
    return (
      <Wrapper>
        <RightQuantity />

        <RightImg images={images} img={img} />
      </Wrapper>
    )
  }
}
export default Right;