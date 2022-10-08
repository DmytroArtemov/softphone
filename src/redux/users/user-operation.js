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

// Асинхронный запрос для получения одного call-a
export const getSeparateCall = (id) => (dispatch) => {
  dispatch(actions.fetchOneCallRequest());
  axios
    .get(`api/callProfile/${id}`)
    .then(({ data }) => dispatch(actions.fetchOneCallSuccess(data)))
    .catch((error) => dispatch(actions.fetchOneCallError(error.message)));
};

// Асинхронный запрос для получения одного contact-a
export const getSeparateContact = (id) => (dispatch) => {
  dispatch(actions.fetchOneContactRequest());
  axios
    .get(`api/contactProfile/${id}`)
    .then(({ data }) => dispatch(actions.fetchOneContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchOneContactError(error.message)));
};
