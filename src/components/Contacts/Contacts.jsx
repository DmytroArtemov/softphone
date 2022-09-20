import React from 'react';
import './Contacts.scss';
import Search from '../UI/Search/Search';
import ListContacts from './ListContacts/ListContacts';

const Contacts = (props) => {
  return (
    <section className='left-bar'>
      <Search />
      <ListContacts contactsList={props.contactsList} />
    </section>
  );
};

export default Contacts;
