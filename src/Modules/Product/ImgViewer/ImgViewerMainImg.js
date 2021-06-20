import React from 'react';
import styled from 'styled-components'

const MainImg = styled.div`
  width:100%;
  & img{
    width:100%;
    max-width:600px;
    max-height:600px;
  }
`

class ImgViewerMainImg extends React.Component {

  componentDidMount() {

    if (!this.props.img) {
      if (this.props.imgs) {
        this.props.setState({ img: this.props.imgs[0] })
      }
    }
  }



  render() {
    const { img } = this.props;
    return (
      <MainImg>
        {img ? <img src={img} alt="fullImg" /> : null}
      </MainImg>
    )
  }
}
export default ImgViewerMainImg;