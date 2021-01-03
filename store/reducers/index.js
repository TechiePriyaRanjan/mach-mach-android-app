const initialState = {
  profile: [],
  feed: []
}


export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      console.log(action.payload, 'reducer')
      const newState = { ...state, profile: action.payload }
      //return new state
      return newState;

    default:
      return state
  }
};