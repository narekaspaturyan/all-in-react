import "./App.css";
import Header from "./components/landing/Header";
import Body from "./components/landing/Body";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {" "}
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
