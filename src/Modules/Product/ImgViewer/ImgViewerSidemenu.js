import React from 'react';
import styled from 'styled-components'

const SideMenu = styled.ul`
  list-style-type: none;
  & li{
    margin-bottom:40px;
    ${props => props.theme.breakpoints.md}{
      margin:0;
      margin-left:16px;
      margin-right:16px;
    }
  }
`
const ImgButton = styled.button`
  border:none;
  cursor:pointer;
  height:80px;
  width:80px;
  border: 1px solid;
  padding: 3px;
  border-color: ${props => props.active ? props.theme.colors.text : 'transparent'};
  background: transparent;
  box-sizing: content-box;
  & img{
    height:100%;
    width:100%;
  }
`
const Wrapper = styled.div`
  height:600px;
  width:140px;
  overflow:auto;
  margin-right:40px;
  direction: rtl;
  padding-left:8px;
  ${props => props.theme.breakpoints.md} {
    flex-direction:row;
    width:100%;
    height:auto;
    direction:inherit;
    margin-bottom:50px;
    & ul {
      display:flex;
      flex-direction:row;
    }
  }
`

class ImgViewerSidemenu extends React.Component {
  handleClick(val) {
    this.props.onClick({ img: val })
  }
  render() {
    const { imgs, currentVal } = this.props;
    // console.log(imgs.indexOf(currentVal));

    return (
      <Wrapper>

        <SideMenu>
          {imgs ? imgs.map((img, index) => (
            <li key={index}>
              <ImgButton
                active={imgs.indexOf(currentVal) === imgs.indexOf(img) ? true : false}
                onClick={() => this.handleClick(img)}>
                <img src={img} alt="sideImg" />
              </ImgButton>
            </li>

          )) : null}

        </SideMenu>
      </Wrapper>
    )
  }
}
export default ImgViewerSidemenu;