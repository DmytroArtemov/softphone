import ItemCall from './ItemCall/ItemCall';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCallList } from '../../../redux/users/user-operation';
import { getUsers } from '../../../redux/users/user-selector';

import { AppComponent } from '../../../SIPml/sipml.js';

import './ListCalls.scss';

const ListCalls = () => {
  const dispatch = useDispatch();

  const sipInstance = new AppComponent();
  console.log(sipInstance);

  useEffect(() => {
    dispatch(fetchCallList());
  }, [dispatch]);

  const allUsers = useSelector(getUsers);

  let callsElements = allUsers.map(
    ({ id, contact_name, phone, destinationType, type, status, date }) => (
      <ItemCall
        key={id}
        idCall={id}
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
      {/* <input type="button" class="btn btn-success" id="sipCall2" value="Audio Call" (click)="sipCall('call-audio')" /> */}
      <div className='link-pbx'>
        <a href='/'>View all on PBX</a>

        <audio id='audio_remote' autoPlay='autoplay'></audio>
        <audio id='ringtone' loop src='./../assets/sounds/ringtone.wav'></audio>
        <audio
          id='ringbacktone'
          loop
          src='./../assets/sounds/ringbacktone.wav'
        ></audio>
        <audio id='dtmfTone' src='./../assets/sounds/dtmf.wav'></audio>
        <button
          className='btn btn-success'
          id='sipCall2'
          onClick={() => sipInstance.sipCall('call-audio')}
        >
          Audio Call
        </button>
      </div>
    </div>
  );
};

export default ListCalls;
