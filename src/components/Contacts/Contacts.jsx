import React from 'react';
import './Contacts.scss';
import Search from '../UI/Search/Search';
import ListContacts from './ListContacts/ListContacts';

const Contacts = () => {
  return (
    <section className='left-bar'>
      <Search />
      <ListContacts />
    </section>
  );
};

export default Contacts;
