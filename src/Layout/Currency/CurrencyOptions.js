import React from 'react';
import styled from 'styled-components'

const List = styled.ul`
  list-style-type:none;
  padding-top:10px;
  padding-bottom:10px;
`;

const ListItem = styled.li`
  list-style-type:none;
  height:50px;
`;

const ListItemButton = styled.button`
  height:100%;
  width:100%;
  background:transparent;
  border:none;
  font-weight:600;
  font-size:18px;
  line-height:28.8px;
  text-align:left;
  padding:0 20px;
  color:${props => props.theme.colors.text};
  cursor:pointer;
  &:hover{
    background:rgba(0, 0, 0, 0.04);
  }
`;


class CurrencyOptions extends React.Component {

  onClick = (newValue) => {
    this.props.getValue(newValue)
    this.props.close();
  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <List>
          {options.map((option, index) => (
            <ListItem>
              <ListItemButton key={index} onClick={() => this.onClick(option)}>
                {option.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default CurrencyOptions;

