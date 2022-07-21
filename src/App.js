import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './routes/routes';

function App() {
  return (
    <>
      <Header />
      {routes()}
      <Footer />
    </>
  );
}

export default App;
