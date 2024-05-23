import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './Navbar/navbar';
import Home from './Page/Home'
import PricePage from './Page/Price';
import AboutPage from './Page/About';
import ContactPage from './Page/Contact';
import LoginModal from './Modal/loginModal';
import { useState } from 'react';

function App() {
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>


  return (
    <div className="App">
      <HeaderNavbar />
      <Home />
      <AboutPage />
      <PricePage />
      <ContactPage />
      <LoginModal />
    </div>
  );
}

export default App;
