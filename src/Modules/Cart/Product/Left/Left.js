import React from 'react';
import LeftTitle from './LeftTitle'
import LeftPrice from './LeftPrice'
import Sizes from './Sizes'
import styled from 'styled-components'

const LeftWrapper = styled.div`
  display:flex;
  flex-direction:column;
`

class Left extends React.Component {


  render() {
    const { title, type, handleSize, currentSize, prices, attributes } = this.props;
    return (
      <LeftWrapper>
        <LeftTitle title={title} type={type} />
        <LeftPrice prices={prices} />
        <Sizes
          currentSize={currentSize}
          handleSize={handleSize}
          sizes={attributes}
        />
      </LeftWrapper>
    )
  }
}
export default Left;
