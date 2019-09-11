import React from 'react';
import ListItem from './ListItem';
import { IListItem } from '../../App';

interface IListItemsProps {
  contacts: IListItem[];
}

const ListItems: React.SFC<IListItemsProps> = ({
  contacts
}: IListItemsProps) => {
  return (
    <ul>
      {contacts &&
        contacts.map((contact, i) => <ListItem key={i} {...contact} />)}
    </ul>
  );
};

export default ListItems;
