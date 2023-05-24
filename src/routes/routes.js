import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import React from "react";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Home from "../pages/Home";
import LayOut from "../components/Layout/layOut";
import { useAuthContext } from "../hooks/useAuthContext";
import PlayerForm from "../pages/playerRegister";
import SportCenter from "../pages/sportCenterRegister";
import PlayerTable from "../pages/admin/playerTable";
import SportCenterTable from "../pages/admin/sportCenters";
import PrivateRoute from "../components/AuthRoute/PrivateRoute";
import MarkerTable from "../pages/admin/MarkerTable";
const Pages = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Routes>
        <Route
          path={"/form"}
          element={!user ? <SignUp /> : <Navigate to="/Home" replace={true} />}
        ></Route>
        <Route
          path={"/login"}
          element={!user ? <SignIn /> : <Navigate to="/Home" replace={true} />}
        ></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path={"/Home"} element={<Home />}></Route>
          <Route path={"/PlayerForm"} element={<PlayerForm />}></Route>
          <Route path={"/SportCenter"} element={<SportCenter />}></Route>

          <Route path={"admin"}>
            <Route path={"players"} element={<PlayerTable />}></Route>
            <Route path={"sportcenters"} element={<SportCenterTable />}></Route>
            <Route path={"MarkerTable"} element={<MarkerTable />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Pages;
