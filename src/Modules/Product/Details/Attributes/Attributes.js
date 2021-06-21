import Text from 'Components/Text';
import React from 'react';
import styled from 'styled-components'
import AttributesList from './AttributesList'
import AttributesListSwatch from './AttributesListSwatch'


const SizesWrapper = styled.div`
  margin:-4px;
  flex-wrap: wrap!important;
  display:flex;
  margin-top:8px;

`
const Wrapper = styled.div`
  margin-top:43px;
`


class Attributes extends React.Component {

  render() {
    const { attributes, handleSize, currentSize } = this.props;
    if (Array.isArray(attributes)) return (
      attributes.map((attribute) => {
        if (attribute.type === "swatch") return (
          <Wrapper>
            <Text
              fontWeight='700'
              fontSize='18px'
              lineHeight='18px'
              color='text'
              fontFamily='roboto'
            >
              {attribute.name}:
            </Text>

            <SizesWrapper>
              <AttributesListSwatch
                currentSize={currentSize}
                handleSize={handleSize}
                items={attribute.items} />
            </SizesWrapper>
          </Wrapper>
        )

        return (
          <Wrapper>
            <Text
              fontWeight='700'
              fontSize='18px'
              lineHeight='18px'
              color='text'
              fontFamily='roboto'
            >
              {attribute.name}:
            </Text>

            <SizesWrapper>
              <AttributesList
                currentSize={currentSize}
                handleSize={handleSize}
                sizes={attribute.items} />
            </SizesWrapper>
          </Wrapper>
        )
      })
    )

    return null;
  }
}

export default Attributes;
