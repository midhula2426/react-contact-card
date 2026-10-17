import { useState } from "react";
import ContactCard from "./contactcard.jsx";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const contacts = [
    {
      name: "Harini",
      phone: "9876543210",
      email: "harini@gmail.com",
    },
    {
      name: "Midhula",
      phone: "9876501234",
      email: "midhula@gmail.com",
    },
    {
      name: "bharathi",
      phone: "9876512340",
      email: "bharathi@gmail.com",
    },
    {
      name: "kovarthini",
      phone: "9876523451",
      email: "kovarthini@gmail.com",
    },
    {
      name: "Kanishka",
      phone: "9876534562",
      email: "kanishka@gmail.com",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>My Contact Cards 💜</h1>

      <input
        type="text"
        placeholder="Search contact..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="cards">
        {filteredContacts.map((contact) => (
          <ContactCard
            key={contact.email}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
}

export default App;