const validationReducer = (state = false, action) => {
  switch (action.type) {
    case 'VALIDATION/VALID': {
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
};
export default validationReducer;
