// --- Селектор на взятие из State всех calls
export const getUsers = (state) => state.data.callsList;

// --- Селектор на взятие из State всех contacts
export const getContacts = (state) => state.data.contactList;

// --- Селектор на взятие из State одного callProfile
export const getOneCall = (state) => state.data.getOneCall;

// --- Селектор на взятие из State одного contactProfile
export const getOneContact = (state) => state.data.getOneContact;
