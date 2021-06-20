import React from 'react';
import styled from 'styled-components'
import ImgViewerSidemenu from './ImgViewerSidemenu'
import ImgViewerMainImg from './ImgViewerMainImg'

const ImgViewerWrapper = styled.div`
  display:flex;
  width:100%;
  margin-bottom:100px;
`

class ImgViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
    }
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    if (this.props.gallery) {
      this.props.gallery.map((newImg, i) => {
        console.log(newImg);
        if (i === 0) {
          this.setState({ img: newImg })
        }
        return false;
      })
    }
  }

  render() {
    const { gallery } = this.props;
    const { img } = this.state;
    return (
      <ImgViewerWrapper>
        <ImgViewerSidemenu
          currentVal={img}
          onClick={this.setState}
          imgs={gallery} />

        <ImgViewerMainImg
          imgs={gallery}
          setState={this.setState}
          img={img} />
      </ImgViewerWrapper>
    )
  }
}

export default ImgViewer;