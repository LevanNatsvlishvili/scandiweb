import ButtonBlock from 'Components/Buttons/ButtonBlock';
import React from 'react';

class SizesListButton extends React.Component {

  render() {
    const { children, active, sizes, ...rest } = this.props;
    return (

      <ButtonBlock
        height='32px'
        fontSize='10px'
        width='35px'
        background={active ? 'text' : null}
        color={active ? 'white' : null}
        {...rest}
      >
        {children}
      </ButtonBlock>
    )

  }
}

export default SizesListButton;
