import React from 'react';
import styled from 'styled-components'
import Theme from 'Theme';

const SideMenu = styled.ul`
  max-width:80px;
  margin-right:40px;
  list-style-type: none;
  height:500px;
  & li{
    margin-bottom:40px;
  }
`
const ImgButton = styled.button`
  border:none;
  cursor:pointer;
  height:80px;
  width:80px;
  border: 1px solid;
  padding: 3px;
  border-color: ${props => props.active ? Theme.colors.text : 'transparent'};
  background: transparent;
  box-sizing: content-box;
  & img{
    height:100%;
    width:100%;
  }
`

class ImgViewerSidemenu extends React.Component {
  handleClick(val) {
    this.props.onClick({ img: val })
  }
  render() {
    const { imgs, currentVal } = this.props;
    return (

      <SideMenu>
        {imgs.map((img, index) => (
          <li key={index}>
            <ImgButton
              active={currentVal.id === img.id ? true : false}
              onClick={() => this.handleClick(img)}>
              <img src={img.img} alt="sideImg" />
            </ImgButton>
          </li>

        ))}

      </SideMenu>
    )
  }
}
export default ImgViewerSidemenu;