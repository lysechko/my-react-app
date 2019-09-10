import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ contacts}) => {
  return (
    <div>
      {contacts &&
        contacts.map(contact => (
          <ListItem {...contacts}/>
        ))}
    </div>
  );
};

export default ListItems;