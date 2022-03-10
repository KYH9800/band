export const initialState = {
  state: true,
};

export const ACTION = 'ACTION';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return {
        ...state,
        state: false,
      };
    default:
      return state;
  }
};

export default reducer;
