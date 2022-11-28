const initialState = {
  scriptId: 'All'
};

export const turbolog = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCRIPTID':
      return { ...state, scriptId: action.scriptId }
    default:
      return state
  }
};
