import React from 'react';
import Header from './header.js';
import LandingPage from './landingpage.js';
import AboutUs from './aboutus.js';
import Product from './Product.js';
import Featured from './featured.js';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <LandingPage/>
      <Featured/>
      <AboutUs/>
<Product/>
    </div>
  );
}
export default App;