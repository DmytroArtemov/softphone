import axios from 'axios';
import * as actions from './user-action';

axios.defaults.baseURL = 'https://631eff9e58a1c0fe9f5d2a59.mockapi.io';

// Асинхронный запрос для получения всех calls
export const fetchCallList = () => async (dispatch) => {
  dispatch(actions.fetchCallListRequest());

  await axios
    .get('api/callsList')
    .then(({ data }) => dispatch(actions.fetchCallListSuccess(data)))
    .catch((error) => console.log(error.message));
};

// Асинхронный запрос для получения всех contacts
export const fetchContactList = () => async (dispatch) => {
  dispatch(actions.fetchContactListRequest());

  await axios
    .get('api/contactsList')
    .then(({ data }) => dispatch(actions.fetchContactListSuccess(data)))
    .catch((error) => console.log(error.message));
};
