import React from "react";
import "../App.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          className="bun"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="fa-solid fa-pencil"></i> Edit
        </button>
        <button
          type="button"
          className="bun"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
