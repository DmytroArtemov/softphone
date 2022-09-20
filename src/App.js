import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Calls from './components/Calls/Calls';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />

      <div className='main'>
        <Navigate />
        <Routes>
          <Route path='/' element={<Calls />} />
          <Route path='calls' element={<Calls />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
