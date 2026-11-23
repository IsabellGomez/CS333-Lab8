
import "./App.css";
import Contact from "./Contact.jsx";
import contacts from "./contacts.js";

// Creates a Contact component using the information from one contact.
function createContact(contact) {
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      phoneNumber={contact.phoneNumber}
      email={contact.email}
      avatar={contact.avatar}
    />
  );
}

// Displays the contacts on the page.
function App() {
  console.log(contacts);

  // Gets the names of all contacts.
  const names = contacts.map(function (contact) {
    return contact.name;
  });
  console.log(names);

  // Gets only the contacts marked as favorites.
  const favorites = contacts.filter(function (contact) {
    return contact.favorite;
  });
  console.log(favorites);

  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createContact)}

      <h1>Favorites</h1>
      {favorites.map(createContact)}
    </div>
  );
}

export default App;
