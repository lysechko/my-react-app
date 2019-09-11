import React from 'react';
import ListItem from './ListItem';

interface IListItemsProps {
  contacts?: object[];
}

const ListItems: React.SFC<IListItemsProps> = ({ contacts }) => {
  return (
    <ul>
      {contacts && contacts.map((contact, i) => <ListItem {...contact} />)}
    </ul>
  );
};

export default ListItems;
