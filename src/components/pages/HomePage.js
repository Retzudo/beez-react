import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    Home page
    <Link to="/apiaries">Apiaries</Link>
  </div>
);

export default HomePage;