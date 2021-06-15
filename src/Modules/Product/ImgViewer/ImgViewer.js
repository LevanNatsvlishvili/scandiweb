import React from 'react';
import styled from 'styled-components'
import ImgViewerSidemenu from './ImgViewerSidemenu'
import ImgViewerMainImg from './ImgViewerMainImg'

const ImgViewerWrapper = styled.div`
  display:flex;
  width:100%;
`

class ImgViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: imgs[0],
    }
    this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <ImgViewerWrapper>
        <ImgViewerSidemenu
          currentVal={this.state.img}
          onClick={this.setState}
          imgs={imgs} />

        <ImgViewerMainImg img={this.state.img.img} />
      </ImgViewerWrapper>
    )
  }
}

export default ImgViewer;

const imgs = [
  { id: 1, img: "/products/ProductDFull.png", },
  { id: 2, img: "/products/ProductBFull.png", },
  { id: 3, img: "/products/ProductAFull.png", },
]