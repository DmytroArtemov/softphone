import React from 'react';
import './Contacts.scss';
import Search from '../UI/Search/Search';
import ListContacts from './ListContacts/ListContacts';
import ProfileContacts from './ProfileContacts/ProfileContacts';

const Contacts = () => {
  return (
    <>
      <section className='left-bar'>
        <Search />
        <ListContacts />
      </section>

      <ProfileContacts />
    </>
  );
};

export default Contacts;
