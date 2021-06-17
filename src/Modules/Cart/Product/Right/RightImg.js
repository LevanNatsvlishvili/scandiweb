import React from 'react';
import styled from 'styled-components'

const ImgWrapper = styled.div`
  padding-left:10px;
  width:140px;
  position:relative;
  & img{
    height:100%;
    width:100%;
  }
`
const Arrow = styled.button`
  position:absolute;
  width:24px;
  height:24px;
  background:transparent;
  border:none;
  cursor:pointer;
  top: 50%;
  right:${props => props.right ? 0 : null};
  transform: translate(0%, -50%) ${props => props.right ? 'rotate(180deg)' : null};

`


class ProductRightImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  SlideLeft = () => {
    if (this.state.current === 0) {
      return;
    }

    this.setState({ current: this.state.current - 1 })
  }

  SlideRight = () => {
    if (this.state.current === this.props.images.length - 1) {
      return;
    }

    this.setState({ current: this.state.current + 1 })
  }

  render() {
    const { images } = this.props
    return (
      <ImgWrapper>
        <Arrow onClick={this.SlideLeft}>
          <img src="/icons/arrow.svg" alt="arrow" />
        </Arrow>
        <img src={images[this.state.current]} alt='product' />
        <Arrow onClick={this.SlideRight} right>
          <img src="/icons/arrow.svg" alt="arrow" />
        </Arrow>
      </ImgWrapper>
    )
  }
}



export default ProductRightImage;