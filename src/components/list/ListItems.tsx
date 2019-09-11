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
      {contacts.length > 0 &&
        contacts.map((contact, i) => <ListItem {...contact} />)}
    </ul>
  );
};

export default ListItems;
