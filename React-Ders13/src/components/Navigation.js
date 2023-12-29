// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work-samples">Work Samples</Link>
        </li>
        <li>
          <Link to="/contact">Contact Information</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
