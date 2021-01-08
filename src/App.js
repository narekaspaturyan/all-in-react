import "./App.css";
import Header from "./components/landing/Header";
import Body from "./components/landing/Body";
import Footer from "./components/landing/Footer";
import Login from "./components/authentication/Login";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {" "}
        <Login />
        {/* <Header />
        <Body />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
