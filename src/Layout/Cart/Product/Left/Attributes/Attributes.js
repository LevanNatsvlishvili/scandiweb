import Text from 'Components/Text';
import React from 'react';
import styled from 'styled-components'
import AttributesListOther from './AttributesListOther'
import AttributesListSizes from './AttributesListSizes'
import AttributesListSwatch from './AttributesListSwatch'

const Sizes = styled.div`
  margin:-4px;
  margin-top:auto;
  flex-wrap: wrap!important;
  display:flex;
  align-items:center;
`

class ProductSizes extends React.Component {

  render() {
    const { attributes, handleSize, currentSize } = this.props;
    if (Array.isArray(attributes)) return (
      attributes.map((attribute) => {
        console.log(attribute);
        if (attribute.type === "swatch") return (
          <Sizes>
            <AttributesListSwatch
              currentSize={currentSize}
              handleSize={handleSize}
              items={attribute.items} />
          </Sizes>
        )


        if (attribute.id === 'Size') return (
          <Sizes>
            <AttributesListSizes
              currentSize={currentSize}
              handleSize={handleSize}
              items={attribute.items} />
          </Sizes>
        )

        if (attribute.id === 'Capacity') return (
          <Sizes>
            <Text
              fontSize='10px'

            >
              {attribute.id}
            </Text>
            <AttributesListOther
              currentSize={currentSize}
              handleSize={handleSize}
              items={attribute.items} />
          </Sizes>
        )

        return null;
      })
    )

    return null;
  }
}



export default ProductSizes;