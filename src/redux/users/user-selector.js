// --- Селектор на взятие из State всех calls
export const getUsers = (state) => state.data.callsList;

// --- Селектор на взятие из State всех contacts
export const getContacts = (state) => state.data.contactList;
