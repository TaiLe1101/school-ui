const valid = (valid) => {
  return {
    type: 'VALIDATION/VALID',
    payload: valid,
  };
};

export { valid };
