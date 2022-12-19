import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSeparateCall } from '../../../../redux/users/user-operation';
import OutCall from '../../../SipComponents/OutCall/OutCall';

import { AppComponent } from '../../../../SIPml/sipml.js';

import './ItemCall.scss';

const ItemCall = ({
  destinationType = '',
  status = '',
  phone,
  name,
  date,
  type,
  idCall,
}) => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const sipInstance = new AppComponent();
  // console.log(sipInstance);

  switch (destinationType) {
    case 1:
      destinationType = (
        <path
          d='M11.6357 0.643066H9.93615C9.61264 0.643066 9.44921 1.0356 9.67855 1.26496L10.164 1.75048L7.19617 4.71834C7.12504 4.78947 7.12504 4.9048 7.19617 4.97594L7.66715 5.44692C7.73829 5.51805 7.85362 5.51805 7.92475 5.44692L10.8926 2.47908L11.3781 2.96466C11.6063 3.19275 12 3.03259 12 2.70706V1.00736C12 0.806162 11.8369 0.643066 11.6357 0.643066Z'
          fill='currentColor'
        />
      );
      break;
    case 2:
      destinationType = (
        <path
          d='M7.50733 5.5H9.20692C9.53042 5.5 9.69385 5.10746 9.46452 4.87811L8.97904 4.39259L11.9469 1.42473C12.018 1.3536 12.018 1.23827 11.9469 1.16713L11.4759 0.696145C11.4048 0.625017 11.2894 0.625017 11.2183 0.696145L8.25047 3.66399L7.76493 3.17841C7.53681 2.95031 7.14304 3.11048 7.14304 3.436V5.13571C7.14304 5.3369 7.30614 5.5 7.50733 5.5Z'
          fill='currentColor'
        />
      );
      break;
    case 3:
      destinationType = '';
      break;
    case 4:
      destinationType = '';
      break;
    default:
      destinationType = '';
  }

  switch (status) {
    case 1:
      status = '';
      break;
    case 2:
      status = 'answered';
      break;
    case 3:
      status = 'not-answered';
      break;
    case 4:
      status = '';
      break;
    default:
      status = '';
  }

  const generateDay = (d) => {
    const date = new Date(d);
    const currentDate = new Date();

    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    if (
      date.getDay() === currentDate.getDay() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      return 'Today';
    } else {
      return days[date.getDay()];
    }
  };

  const generateTime = (date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    return (
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes < 10 ? '0' + minutes : minutes)
    );
  };

  return (
    <li
      className='user-item'
      onClick={() => {
        dispatch(getSeparateCall(idCall));
        sipInstance.sipRegister();
      }}
    >
      <div className={'icon ' + status}>
        <svg
          width='12'
          height='13'
          viewBox='0 0 12 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.7146 8.56721L8.52715 7.62971C8.4337 7.58988 8.32984 7.58149 8.23121 7.60579C8.13258 7.6301 8.04452 7.68579 7.98027 7.76447L7.01152 8.94807C5.49116 8.23123 4.26762 7.00769 3.55078 5.48732L4.73437 4.51857C4.81322 4.45445 4.86902 4.36638 4.89334 4.2677C4.91766 4.16903 4.90916 4.06512 4.86914 3.9717L3.93164 1.7842C3.88772 1.6835 3.81003 1.60128 3.71198 1.55172C3.61393 1.50216 3.50166 1.48836 3.39453 1.51271L1.36328 1.98146C1.25999 2.00531 1.16784 2.06347 1.10186 2.14644C1.03588 2.22941 0.999976 2.33229 1 2.4383C1 7.44807 5.06055 11.5008 10.0625 11.5008C10.1685 11.5009 10.2715 11.465 10.3545 11.399C10.4375 11.333 10.4957 11.2408 10.5195 11.1375L10.9883 9.10627C11.0125 8.99862 10.9984 8.8859 10.9484 8.78751C10.8985 8.68912 10.8158 8.61122 10.7146 8.56721V8.56721Z'
            stroke='currentColor'
          />
          {destinationType}
        </svg>
      </div>
      <div className='client'>
        <p className={'phone ' + status}>{phone}</p>
        <span className='name'>{name}</span>
      </div>
      <div className='info'>
        <div>
          <span className='day'>{generateDay(date)}, </span>
          <span className='time'>{generateTime(date)}</span>
        </div>
        {type === 2 ? (
          <div className='warning status-iternal'>Internal</div>
        ) : (
          ''
        )}
      </div>
      <div
        className='get-call'
        onClick={() => {
          console.log(<OutCall />);
        }}
      >
        <div className='icon'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.2731 0.960383L15.2106 0.0228834C14.7692 -0.0786792 14.3161 0.15179 14.1364 0.565852L12.2614 4.94085C12.0973 5.32367 12.2067 5.77288 12.5309 6.0346L14.8981 7.9721C13.4919 10.9682 11.0348 13.4604 7.97624 14.894L6.03874 12.5268C5.77311 12.2026 5.3278 12.0932 4.94499 12.2573L0.569987 14.1323C0.152018 14.3159 -0.0784506 14.769 0.023112 15.2104L0.960612 19.2729C1.05827 19.6948 1.43327 19.9994 1.87467 19.9994C11.8786 19.9994 19.9997 11.894 19.9997 1.87445C19.9997 1.43695 19.6989 1.05804 19.2731 0.960383Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </div>
    </li>
  );
};

export default ItemCall;
