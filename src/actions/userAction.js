
export const setUser = (userData) => {
  return {
    type: 'SET_USER',
    payload: userData,
  };
};

export const updateUser = (updatedFields) => {
  return {
    type: 'UPDATE_USER',
    payload: updatedFields,
  };
};

export const DeleteUser = () => {
  return {
    type: 'CLEAR_USER',
  };
};
