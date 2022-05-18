const fetchData = async () => {
  const response = await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-10');
  const data = await response.json();
  return data;
};
const thunkFunction = () => async (dispatch) => {
  const kino = await fetchData();
  const dino = await kino.dates['2020-03-10'];
  dispatch({ type: 'SEND_TO_STORE', payload: dino });
};

export default thunkFunction;
