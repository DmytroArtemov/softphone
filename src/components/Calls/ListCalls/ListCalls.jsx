import ItemCall from './ItemCall/ItemCall';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCallList } from '../../../redux/users/user-operation';
import { getUsers } from '../../../redux/users/user-selector';

import './ListCalls.scss';

const ListCalls = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCallList());
  }, [dispatch]);

  const allUsers = useSelector(getUsers);

  let callsElements = allUsers.map(
    ({ id, contact_name, phone, destinationType, type, status, date }) => (
      <ItemCall
        key={id}
        name={contact_name}
        phone={phone}
        destinationType={destinationType}
        type={type}
        status={status}
        date={date}
      />
    )
  );

  return (
    <div className='calls-list-section'>
      <ul className='users-call'>{callsElements}</ul>

      <div className='link-pbx'>
        <a href='/'>View all on PBX</a>
      </div>
    </div>
  );
};

export default ListCalls;
