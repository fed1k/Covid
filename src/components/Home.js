import React from 'react';
import Search from './searchBar';
import Countries from './Countries';

const Home = () => (
  <div>
    <div className="header-info">
      <h1>Daily statistics of confirmed Covid-19 cases</h1>
      <p>Source: John Hopkins University</p>
    </div>
    <Search />
    <Countries />
  </div>
);

export default Home;
