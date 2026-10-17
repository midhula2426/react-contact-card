function ContactCard({ name, phone, email }) {
  const photos = {
    Harini:
      "https://i.pravatar.cc/150?img=47",
    Midhula:
      "https://i.pravatar.cc/150?img= 32",
    Bharathi:  
      "https://i.pravatar.cc/150?img=44",
    Kovarthini:
      "https://i.pravatar.cc/150?img=47",
    Kanishka: 
      "https://i.pravatar.cc/150?img=49",
  };

  return (
    <div className="card">
      <img
        className="profile-photo"
        src={photos[name] || "https://i.pravatar.cc/150"}
        alt={name}
      />

      <h2>{name}</h2>
      <p>📞 {phone}</p>
      <p>✉️ {email}</p>
    </div>
  );
}

export default ContactCard;