import ButtonCube from 'Components/Buttons/ButtonCube';
import React from 'react';

class SizesListButton extends React.Component {

  render() {
    const { children, active, sizes, ...rest } = this.props;
    return (

      <ButtonCube
        background={active ? 'text' : null}
        color={active ? 'white' : null}
        {...rest}
      >
        {children}
      </ButtonCube>
    )

  }
}

export default SizesListButton;
