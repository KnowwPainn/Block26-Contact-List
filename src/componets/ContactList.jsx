import React, { useState, useEffect } from 'react';

// Dummy contacts data
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList() {
  // State for contacts
  const [contacts, setContacts] = useState(dummyContacts);

  // useEffect hook for fetching data
  useEffect(() => {
    async function fetchContacts() {
      try {
        // Fetch data from the API
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');

        // Parse the response
        const data = await response.json();

        // Log the data to the console
        console.log('Data from API:', data);

        // Set the contacts state with the fetched data
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }

    // Call the fetchContacts function
    fetchContacts();
  }, []);

  // Log contacts to console
  console.log("Contacts: ", contacts);

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
        {/* Map over contacts data */}
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
