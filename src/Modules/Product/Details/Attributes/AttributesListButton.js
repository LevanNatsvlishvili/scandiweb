import ButtonBlock from 'Components/Buttons/ButtonBlock';
import React from 'react';

class SizesListButton extends React.Component {

  render() {
    const { children, active, sizes, activeBorder, ...rest } = this.props;
    return (

      <ButtonBlock
        width='63px'
        height='45px'
        background={active ? 'text' : null}
        color={active ? 'white' : null}
        border={activeBorder ? '1px solid' : null}
        {...rest}
      >
        {children}
      </ButtonBlock>
    )

  }
}

export default SizesListButton;
