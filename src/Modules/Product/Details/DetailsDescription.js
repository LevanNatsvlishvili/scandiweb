import React from 'react';
import styled from 'styled-components'
import Text from 'Components/Text'

const DescriptionWrapper = styled.div`
  margin-top:40px;
`

class DetailsDescription extends React.Component {


  render() {
    const { desc } = this.props;
    return (
      <DescriptionWrapper>
        <Text
          fontSize='14px'
          lineHeight='25.6px'
          color='text'
          dangerouslySetInnerHTML={{ __html: desc }}
        >
          {/* {desc} */}
        </Text>
      </DescriptionWrapper>
    )
  }
}

export default DetailsDescription;