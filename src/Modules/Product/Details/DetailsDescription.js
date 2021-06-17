import React from 'react';
import styled from 'styled-components'
import Text from 'Components/Text'

const DescriptionWrapper = styled.div`
  margin-top:40px;
`

class DetailsDescription extends React.Component {


  render() {
    return (
      <DescriptionWrapper>
        <Text
          fontSize='14px'
          lineHeight='25.6px'
          color='text'
        >
          Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
        </Text>
      </DescriptionWrapper>
    )
  }
}

export default DetailsDescription;