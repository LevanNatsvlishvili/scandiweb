import React from 'react';
import styled from 'styled-components'

const MainImg = styled.div`
  width:100%;
  & img{
    width:100%;
    max-width:600px;
  }
`

class ImgViewerMainImg extends React.Component {

  render() {
    const { img } = this.props;
    return (
      <MainImg>
        <img src={img} alt="fullImg" />
      </MainImg>
    )
  }
}
export default ImgViewerMainImg;