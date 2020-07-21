import React, { useState } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";

const App = (props) => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name,
    };
    setName("");
    props.createContact(contact);
  };

  const listView = (data, index) => (
    <div className="row">
      <div className="col-md-10">
        <li key={index} className="list-group-item clearfix">
          {data.name}
        </li>
      </div>
      <div className="col-md-2">
        <button
          onClick={(e) => deleteContact(e, index)}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </div>
  );

  const deleteContact = (e, index) => (
    e.preventDefault(), props.deleteContact(index)
  );

  return (
    <div className="container">
      <h1>Simple Redux Contact Keeper</h1>
      <hr />
      <div>
        <h3>Add Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            value={name}
          />
          <br />
          <input type="submit" className="btn btn-success" value="ADD" />
        </form>
        <hr />
        {
          <ul className="list-group">
            {props.contacts.map((contact, i) => listView(contact, i))}
          </ul>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, X) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
