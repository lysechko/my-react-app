import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ contacts }) => {
  return (
    <ul>
      {contacts &&
        contacts.map((contact, i) => <ListItem key={i} {...contact} />)}
    </ul>
  );
};

export default ListItems;
