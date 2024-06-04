import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <>
      <Navbar links={["men", "women", "sale", "new arrival", "size guide"]} />
      <Home />
    </>
  );
}

export default App;
