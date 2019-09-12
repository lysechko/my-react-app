import React from 'react';
import ListItem from './ListItem';
import { IListItem } from '../../App';

interface IListItemsProps {
  contacts: IListItem[];
  loader: boolean;
}

const ListItems: React.SFC<IListItemsProps> = ({
  contacts,
  loader
}: IListItemsProps) => {
  return loader ? (
    <div className='loader'></div>
  ) : (
    <ul>
      {contacts &&
        contacts.map((contact, i) => <ListItem key={i} {...contact} />)}
    </ul>
  );
};

export default ListItems;
