import * as Types from "../actions/Types";

export default (state = [], action) => {
  switch (action.type) {
    case Types.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    case Types.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};
