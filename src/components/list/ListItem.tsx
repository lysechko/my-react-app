import React from 'react';

interface IListItemProps {
  companyName?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  countryName?: string;
}

const ListItem: React.SFC<IListItemProps> = ({
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
