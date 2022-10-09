import { useSelector } from 'react-redux';
import { getOneCall } from '../../../redux/users/user-selector';
import './ProfileCalls.scss';

const ProfileCalls = () => {
  const oneCall = useSelector(getOneCall);
  const {
    contact_name,
    date,
    public_id,
    category_name,
    source_number,
    destination_number,
    total_duration,
    ivr_duration,
    wait_duration,
    on_call_duration,
  } = oneCall;

  return (
    <section className='element-profile'>
      {Object.keys(oneCall).length > 0 && (
        <>
          <div className='profile-head'>
            <div className='col-info'>
              <div className='date'>
                <div>
                  <span className='month'>Dec</span>{' '}
                  <span className='day'>12</span>
                </div>
                <div>
                  <span className='time'>{date}</span>
                </div>
              </div>
              <div className='client'>
                <p className='number'>{source_number}</p>
                <span className='name'>{contact_name}</span>
              </div>
              <ul className='tags'>
                <li className='success'>Incoming</li>
                <li className='success'>Active</li>
              </ul>
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
                  <span className='category'>CALL ID</span>
                  <p>
                    {public_id}
                    <i className='copy'>
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.9205 1.54549L9.70451 0.329508C9.49353 0.118529 9.20738 1.56018e-06 8.90902 0L4.875 0C4.25367 0 3.75 0.503672 3.75 1.125V2.25H1.875C1.25367 2.25 0.75 2.75367 0.75 3.375V10.875C0.75 11.4963 1.25367 12 1.875 12H7.125C7.74633 12 8.25 11.4963 8.25 10.875V9.75H10.125C10.7463 9.75 11.25 9.24633 11.25 8.625V2.34098C11.25 2.04262 11.1315 1.75647 10.9205 1.54549ZM6.98438 10.875H2.01562C1.97833 10.875 1.94256 10.8602 1.91619 10.8338C1.88982 10.8074 1.875 10.7717 1.875 10.7344V3.51562C1.875 3.47833 1.88982 3.44256 1.91619 3.41619C1.94256 3.38982 1.97833 3.375 2.01562 3.375H3.75V8.625C3.75 9.24633 4.25367 9.75 4.875 9.75H7.125V10.7344C7.125 10.7717 7.11018 10.8074 7.08381 10.8338C7.05744 10.8602 7.02167 10.875 6.98438 10.875ZM9.98438 8.625H5.01562C4.97833 8.625 4.94256 8.61018 4.91619 8.58381C4.88982 8.55744 4.875 8.52167 4.875 8.48438V1.26562C4.875 1.22833 4.88982 1.19256 4.91619 1.16619C4.94256 1.13982 4.97833 1.125 5.01562 1.125H7.5V3.1875C7.5 3.49816 7.75184 3.75 8.0625 3.75H10.125V8.48438C10.125 8.52167 10.1102 8.55744 10.0838 8.58381C10.0574 8.61018 10.0217 8.625 9.98438 8.625ZM10.125 2.625H8.625V1.125H8.85075C8.88804 1.125 8.9238 1.13981 8.9502 1.16618L10.0838 2.2998C10.0969 2.31286 10.1072 2.32837 10.1143 2.34543C10.1214 2.36249 10.125 2.38078 10.125 2.39925V2.625Z'
                          fill='currentColor'
                        />
                      </svg>
                    </i>
                  </p>
                </li>
                <li className='item'>
                  <span className='category'>CALL CATEGORY</span>
                  <p>{category_name}</p>
                </li>
                <li className='item'>
                  <span className='category'>SOURCE NUMBER</span>
                  <p>{source_number}</p>
                </li>
                <li className='item'>
                  <span className='category'>DESTINATION NUMBER</span>
                  <p>{destination_number}</p>
                </li>
                <li className='item'>
                  <span className='category'>QUEUE</span>
                  <p>none</p>
                </li>
                <li className='item'>
                  <span className='category'>TOTAL DURATION</span>
                  <p>{total_duration}</p>
                </li>
                <li className='item'>
                  <span className='category'>IVR DURATION</span>
                  <p>{ivr_duration}</p>
                </li>
                <li className='item'>
                  <span className='category'>WAITING DURATION</span>
                  <p>{wait_duration}</p>
                </li>
                <li className='item'>
                  <span className='category'>ON CALL DURATION</span>
                  <p>{on_call_duration}</p>
                </li>
              </ul>
              <a href='/' className='btn btn-secondary link-show-pbx'>
                Show more on PBX
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProfileCalls;
