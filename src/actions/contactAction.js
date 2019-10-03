import * as actionTypes from "./actionTypes";
//es6 imp
export const createContact = contact => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact
  };
};

export const deleteContact = id => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id
  };
};
