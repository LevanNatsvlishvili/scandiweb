import React from 'react';
import styled from 'styled-components'

const MainImg = styled.div`
  width:100%;
  & img{
    width:100%;
    max-width:600px;
    max-height:600px;
    ${props => props.theme.breakpoints.md} {
      max-width:100%;
      max-height:100%;
  
    }
  }
`
const Alt = styled.div`
  width:100%;
  background:${props => props.theme.colors.out};
  height:100%;
  min-height:600px;
  display:flex;
  align-items:center;
  justify-content:center;
    ${props => props.theme.breakpoints.xs} {
      min-height:300px;
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
        {img ? <img src={img} alt="fullImg" /> :
          <Alt>
            <h1>Choose a picture</h1>
          </Alt>
        }
      </MainImg>
    )
  }
}
export default ImgViewerMainImg;