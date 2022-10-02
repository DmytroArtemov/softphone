import ItemContact from './ItemContact/ItemContact';

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactList } from '../../../redux/users/user-operation';
import { getContacts } from '../../../redux/users/user-selector';

import './ListContacts.scss';

const ListContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);

  const allContacts = useSelector(getContacts);

  let contactElements = allContacts.map(
    ({ id, first_name, last_name, phone, favorite }) => (
      <ItemContact
        key={id}
        contactId={id}
        firstName={first_name}
        lastName={last_name}
        phone={phone}
        favorite={favorite}
      />
    )
  );

  return (
    <div className='contacts-list-section'>
      <ul className='list-contacts'>{contactElements}</ul>
    </div>
  );
};

export default ListContacts;
