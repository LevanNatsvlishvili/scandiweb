import React from 'react';
import styled from 'styled-components'
import DetailsTitle from './DetailsTitle'
import DetailsSizes from './DetailsSizes'

const DetailsWrapper = styled.div`
  padding-left:100px;
`

class Details extends React.Component {


  render() {
    return (
      <DetailsWrapper>
        <DetailsTitle title='Apollo' type='Running Shorts' />

        <DetailsSizes sizes={sizes} />
      </DetailsWrapper>
    )
  }
}

export default Details;

const sizes = [
  { name: 'xs', disabled: false },
  { name: 'sm', disabled: false },
]