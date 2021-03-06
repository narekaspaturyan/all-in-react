import "./App.scss";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

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
import LandLordHome from "./components/landlord/landLordHome/LandLordHome";
import LandLordApartments from "./components/landlord/landLordHome/addNewApartment/LandLordApartments";
import FavoritesMain from "./components/landlord/landLordHome/matchACorrectTenat/favorites/FavoritesMain";
import ApartmentInfoMain from "./components/landlord/landLordHome/addNewApartment/apartmentInfo/ApartmentInfoMain";
import ChooseLocationMain from "./components/landlord/landLordHome/addNewApartment/chooseLocation/ChooseLocationMain";
import LandAreaAndRoomsMain from "./components/landlord/landLordHome/addNewApartment/landAreaAndNumberOfRooms/LandAreaAndRoomsMain";

import LandingMobile from "./components/landing/landingMobile/LandingMobile";
import DescriptionAndImagesMain from "./components/landlord/landLordHome/addNewApartment/descriptionAndImages/DescriptionAndImagesMain";

const PaddingDiv = styled.div`
  padding-top: 40px;
`;

function App() {
  const [user, setUser] = useState(false); // fetch user

  return (
    <div className="page-container">
      <div className="content-wrap">
        <PaddingDiv>
          {/* <LandingMobile /> */}
          <Header title={user ? "Account" : "SignIn"} navBar={user} />{" "}
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route path="/account" component={YourProfileMain} />
            <Route path="/apartmentInfo" component={ApartmentInfoMain} />

            <Route path="/chooseLocation" component={ChooseLocationMain} />
            <Route path="/confirmation" component={Confirmation} />

            <Route
              path="/descriptionAndImages"
              component={DescriptionAndImagesMain}
            />

            <Route path="/favoriteTenents" component={FavoritesMain} />
            <Route path="/forgotPassword" component={ForgotPassword} />

            <Route path="/register" component={RegisterMain} />

            <Route path="/login" component={Login} />
            <Route path="/landing" component={Landing} />
            <Route path="/landAreaAndRooms" component={LandAreaAndRoomsMain} />
            <Route path="/landLordApartments" component={LandLordApartments} />
            <Route path="/landLordHome" component={LandLordHome} />

            <Route path="/newPassword" component={NewPassword} />
            <Route path="/notFound" component={Error404} />

            <Route path="/success" component={Success} />

            <Redirect to="/notFound" />
          </Switch>
        </PaddingDiv>
      </div>
    </div>
  );
}

export default App;
