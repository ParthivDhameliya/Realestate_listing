import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import LogIn from './containers/Login';
import SignUp from './containers/Signup';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} /> 
              <Route path='about' element={<About />} /> 
              <Route path='contact' element={<Contact />} /> 
              <Route path='listings' element={<Listings />} /> 
              <Route path='listings/:id' element={<ListingDetail />} /> 
              <Route path='login' element={<LogIn />} /> 
              <Route path='signup' element={<SignUp />} /> 
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
