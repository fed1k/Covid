const myReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEND_TO_STORE':
      return action.payload;
    default:
      return state;
  }
};

export default myReducer;
