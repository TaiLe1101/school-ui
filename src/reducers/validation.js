const validationReducer = (state = false, action) => {
  switch (action.type) {
    case 'VALIDATION/VALID': {
      return;
    }
    default: {
      return state;
    }
  }
};
export default validationReducer;
