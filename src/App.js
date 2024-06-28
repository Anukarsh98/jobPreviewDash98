import "./App.css";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import CenterPage from "./components/CenterPage";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Options/>
        <CenterPage/>
      </div>
    </div>
  );
}

export default App;
