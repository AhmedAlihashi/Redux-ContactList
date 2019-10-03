import * as Types from "./Types";
//es6 imp
export const createContact = contact => {
  return {
    type: Types.CREATE_NEW_CONTACT,
    contact: contact
  };
};

export const deleteContact = id => {
  return {
    type: Types.REMOVE_CONTACT,
    id: id
  };
};
