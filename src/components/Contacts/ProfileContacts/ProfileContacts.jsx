import { useSelector } from 'react-redux';
import { getOneContact } from '../../../redux/users/user-selector';
import './ProfileContacts.scss';

const ProfileContacts = () => {
  const oneContact = useSelector(getOneContact);
  const { first_name, last_name, phones, favorite } = oneContact;

  return (
    <section className='profile-contact'>
      {Object.keys(oneContact).length > 0 && (
        <>
          <div className='profile-head'>
            <div className='col-info'>
              <div className='client'>
                <span className='name'>
                  <i>{`${first_name} ${last_name}`} </i>
                  {/* если favorite = true  */}
                  {favorite ? (
                    <div className='favorite'>
                      <svg
                        width='22'
                        height='21'
                        viewBox='0 0 22 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.0079 1.42533L7.61368 6.27984L2.25685 7.06082C1.29621 7.20015 0.911225 8.38444 1.60787 9.06276L5.48342 12.8393L4.56678 18.1741C4.40178 19.1384 5.41742 19.8607 6.26806 19.4098L11.0602 16.8908L15.8524 19.4098C16.7031 19.8571 17.7187 19.1384 17.5537 18.1741L16.6371 12.8393L20.5126 9.06276C21.2093 8.38444 20.8243 7.20015 19.8636 7.06082L14.5068 6.27984L12.1125 1.42533C11.6836 0.560022 10.4406 0.549022 10.0079 1.42533Z'
                          fill='#FFC754'
                        />
                      </svg>
                    </div>
                  ) : (
                    //  если favorite = false
                    <div className='favorite'>
                      <svg
                        width='22'
                        height='21'
                        viewBox='0 0 22 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.0079 1.42533L7.61368 6.27984L2.25685 7.06082C1.29621 7.20015 0.911225 8.38444 1.60787 9.06276L5.48342 12.8393L4.56678 18.1741C4.40178 19.1384 5.41742 19.8607 6.26806 19.4098L11.0602 16.8908L15.8524 19.4098C16.7031 19.8571 17.7187 19.1384 17.5537 18.1741L16.6371 12.8393L20.5126 9.06276C21.2093 8.38444 20.8243 7.20015 19.8636 7.06082L14.5068 6.27984L12.1125 1.42533C11.6836 0.560022 10.4406 0.549022 10.0079 1.42533Z'
                          stroke='#A6B4D0'
                        />
                      </svg>
                    </div>
                  )}
                </span>
                <span className='number'>{phones[0].number}</span>
              </div>
            </div>
            <div className='col-phone'>
              <div className='get-call'>
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
            </div>
          </div>
          <div className='profile-body'>
            <div className='col-left'>
              <ul className='info-client'>
                <li className='item'>
                  <span className='category primary-phone'>PHONE </span>
                  <p>{phones[0].number}</p>
                </li>

                <li className='item'>
                  <span className='category'>PHONE 1</span>
                  <p>{phones[1].number}</p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProfileContacts;
