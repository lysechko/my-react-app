import React from 'react';
import { IListItem } from '../../App';

const ListItem: React.SFC<IListItem> = ({
  companyName,
  address,
  zipCode,
  city,
  countryName
}) => {
  return (
    <li>
      <h2>{companyName}</h2>
      <p className='address'>Address:</p>
      {address}
      <p>
        <span>{zipCode}</span>
        <span className='city'>{city}</span>
      </p>
      <p>{countryName}</p>
    </li>
  );
};

export default ListItem;
