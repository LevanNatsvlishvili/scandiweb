import React from 'react';
import styled from 'styled-components'

const ImgWrapper = styled.div`
  padding-left:10px;

  & img{
    height:100%;
    width:100%;
  }
`

class ProductRightImage extends React.Component {

  render() {
    return (
      <ImgWrapper>
        <img src={this.props.img} alt='product' />
      </ImgWrapper>
    )
  }
}



export default ProductRightImage;