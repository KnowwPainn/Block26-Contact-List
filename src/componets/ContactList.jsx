import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

const ContactList = ({ setSelectedContactId }) => {
  // State for contacts
  const [contacts, setContacts] = useState([]);

  // State for fetching status
  const [isFetching, setIsFetching] = useState(false);

  // State for potential error
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContacts() {
      setIsFetching(true);

      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const data = await response.json();

        setContacts(data);
        setIsFetching(false);
      } catch (error) {
        setError(error);
        setIsFetching(false);
      }
    }

    fetchContacts();
  }, []); // Run effect only once on mount

  // Log contacts to console
  console.log('Contacts: ', contacts);

  if (isFetching) {
    return <p>Loading contacts...</p>;
  }

  if (error) {
    return <p>Error fetching contacts: {error.message}</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            onClick={() => setSelectedContactId(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
