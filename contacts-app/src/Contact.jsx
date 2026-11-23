
import Avatar from "./Avatar.jsx";function Contact(props) {
  console.log(props);
// Displays one person's contact information.
  return (
    <div className="contact">
    <img className="avatar" src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Phone: {props.phoneNumber}</p>
        {props.email && <p>Email: {props.email}</p>}
    </div>
  );
}

export default Contact;