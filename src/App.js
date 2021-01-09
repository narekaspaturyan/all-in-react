import "./App.css";
import Header from "./components/landing/Header";
import Body from "./components/landing/Body";
import Footer from "./components/landing/Footer";
import Login from "./components/authentication/login/Login";
import ForgotPassword from "./components/authentication/forgotPasword/ForgotPassword";
import RegisterMain from "./components/authentication/register/RegisterMain";
import Success from "./components/authentication/success/Success";
import Confirmation from "./components/authentication/success/Confirmation";
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {" "}
        {/* <Login /> */}
        <Confirmation />
        {/* <Success /> */}
        {/* <RegisterMain /> */}
        {/* <ForgotPassword /> */}
        {/* <Header />
        <Body />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
