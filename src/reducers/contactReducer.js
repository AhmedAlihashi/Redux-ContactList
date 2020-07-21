import * as actionTypes from "../actions/actionTypes";

export default (state = [], { contact, id, type }) => {
  switch (type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, contact)];
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== id);
    default:
      return state;
  }
};
