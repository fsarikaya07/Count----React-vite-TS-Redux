import "./App.css";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";
import { ContentContainer } from "./components/styled";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentContainer>
        <Counter />
      </ContentContainer>
    </div>
  );
}


export default App;
