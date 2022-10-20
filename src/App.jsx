import { ItemListContainer } from "./components/ItemListContainer";
import Navbar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo={"ESTE ES EL ELEMENTO ItemListContainer"} />
    </div>
  );
}

export default App;
