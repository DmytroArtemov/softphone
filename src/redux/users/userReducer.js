import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchCallListRequest,
  fetchCallListSuccess,
  fetchTransactionsError,
  fetchContactListSuccess,
} from './user-action';

// Reducer для  записи callsList в store
const userReducer = createReducer([], {
  [fetchCallListSuccess]: (_, { payload }) => payload,
});

// Reducer для  записи ContactList в store
const contactReducer = createReducer([], {
  [fetchContactListSuccess]: (_, { payload }) => payload,
});

const errorReducer = createReducer(false, {
  [fetchTransactionsError]: (_, { payload }) => payload,
});

export default combineReducers({
  callsList: userReducer,
  contactList: contactReducer,
  error: errorReducer,
});
