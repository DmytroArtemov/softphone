import { createAction } from '@reduxjs/toolkit';

// --- Екшены на получение всех calls листов
export const fetchCallListRequest = createAction('users/fetchCallListRequest');

export const fetchCallListSuccess = createAction('users/fetchCallListSuccess');

export const fetchTransactionsError = createAction(
  'users/fetchTransactionsError'
);

// --- Екшены на получение всех contact листов
export const fetchContactListRequest = createAction(
  'users/fetchContactListRequest'
);

export const fetchContactListSuccess = createAction(
  'users/fetchContactListSuccess'
);

export const fetchContactError = createAction('users/fetchContactError');
