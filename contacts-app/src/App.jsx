import "./App.css";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Contact 
        name="Justin Gray" 
        phoneNumber="541-555-0101"  
        email="jgray@example.com"
        avatar="https://i.pravatar.cc/150?img=50" />
      <Contact 
        name="Eren Yeager" 
        phoneNumber="541-555-0102"
        email="eyeager@example.com"
        avatar="https://i.pravatar.cc/150?img=33"  />
      <Contact 
        name="Hatsune Miku" 
        phoneNumber="541-555-0103" 
        email="hmiku@example.com"
        avatar="https://i.pravatar.cc/150?img=40" />
    </div>
  );
}
export default App;