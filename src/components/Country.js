import React, { useEffect, useState } from 'react';

const Country = () => {
  const [myData, setMyData] = useState([]);
  const fetchCountry = async () => {
    const response = await fetch(`https://api.covid19tracking.narrativa.com/api/2020-03-10/country${window.location.pathname}`);
    const data = await response.json();
    setMyData(Object.entries(data.dates['2020-03-10'].countries)[0][1]);
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  console.log(myData);
  return (
    <div className="country">
      {myData ? (
        <div className="country-item">
          <h1>{myData.name}</h1>
          <span>
            {myData.date}
            {' '}
            confirmed cases
            {' '}
            {myData.today_confirmed}
          </span>
          {myData.regions ? myData.regions.map((i) => (
            <div key={i.id} className="regional-data-items">
              <h4 key={i.name}>{i.name}</h4>
              <span>{i.today_confirmed}</span>
            </div>
          ))
            : <h5>No Data Available</h5>}
        </div>
      ) : <h1>Loading...</h1>}
    </div>
  );
};

export default Country;
