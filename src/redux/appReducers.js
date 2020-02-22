import * as actionTypes from './actionTypes';

const initialState = {
  tag: ""
};

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const updateSearchedTag = (state, action) => {
  return updateObject(state, {
    tag: action.payload.tag
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCHED_TAG: 
      return updateSearchedTag(state, action);
    default:
      return state;
  }
};

export default reducer;