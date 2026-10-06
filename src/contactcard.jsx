function ContactCard({ name, phone, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>📞 {phone}</p>
      <p>✉️ {email}</p>
    </div>
  );
}

export default ContactCard;