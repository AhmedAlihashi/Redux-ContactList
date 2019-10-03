import * as Types from "./Types";

export const createContact = contact => {
  return {
    type: Types.CREATE_NEW_CONTACT,
    contact: contact
  };
};
