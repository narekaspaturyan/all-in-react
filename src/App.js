import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/landing/Header";
import Landing from "./components/landing/Landing";
import Login from "./components/authentication/login/Login";
import ForgotPassword from "./components/authentication/forgotPassword/ForgotPassword";
import RegisterMain from "./components/authentication/register/RegisterMain";
import Success from "./components/authentication/success/Success";
import Confirmation from "./components/authentication/success/Confirmation";
import NewPassword from "./components/authentication/newPassword/NewPassword";
import Error404 from "./components/authentication/error404/Error404";
import YourProfileMain from "./components/landlord/profile/YourProfileMain";
import WhatDoYouWant from "./components/landlord/whatDoYouwant/WhatDoYouWant";
import LandingMobile from "./components/landing/landingMobile/LandingMobile";

function App() {
  const [user, setUser] = useState(false); // fetch user

  return (
    <div className="page-container">
      <div className="content-wrap">
        <LandingMobile />
        {/* <Header title={user ? "Account" : "SignIn"} navBar={user} />{" "} */}
        {/* <Switch>
          <Route path="/register" component={RegisterMain} />
          <Route path="/landing" component={Landing} />
          <Route path="/account" component={YourProfileMain} />
          <Route path="/login" component={Login} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/notFound" component={Error404} />
          <Redirect to="/landing" />
        </Switch> */}
        {/* <WhatDoYouWant /> */}
        {/* <NewPassword /> */}
        {/* <Confirmation /> */}
        {/* <Success /> */}
      </div>
    </div>
  );
}

export default App;
