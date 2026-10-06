import ContactCard from "./ContactCard";
function App() {
  const contacts = [
    {
      name: "Harini",
      phone: "9876543210",
      email: "harini@gmail.com",
    },
    {
      name: "Midhula",
      phone: "9876543211",
      email: "midhula@gmail.com",
    },
    {
      name: "Priya",
      phone: "9876543212",
      email: "priya@gmail.com",
    },
  ];

  return (
    <div className="app">
  <h1>Contact Cards</h1>

  <div className="cards">
    {contacts.map((contact) => (
      <ContactCard
        key={contact.name}
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