import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '../Loading_icon.gif';

const Countries = () => {
  const data = useSelector((state) => state.country.countries);
  return (
    <div className="cards-main-container">
      {data ? Object.entries(data).map((i) => (
        <Link className="countries" to={i[1].id} key={i[1].name}>
          <div>
            <h1>{i[1].name}</h1>
            <p>
              {i[1].date}
              {' '}
              confirmed cases:
              {' '}
              {i[1].today_confirmed}
            </p>
          </div>
        </Link>
      ))
        : <img src={icon} alt="loading" />}
    </div>
  );
};

export default Countries;
