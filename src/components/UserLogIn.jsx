import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { auth } from "/src/API/firebase";
import { userActions } from "../store/";

function UserLogIn({user}) {
  const dispatch = useDispatch();

    const handleLogout = () => {
      auth.signOut()
      .then(() => {
          console.log('signout');
          dispatch(userActions.logout());
      })
      .catch((error) => {
          console.log(error);
      });
    }
  return (
    <div>
      <NavDropdown title="User Page" id="basic-nav-user">
      <NavDropdown.Header>Welcome, {user.name}!</NavDropdown.Header>
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Orders</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#" onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default UserLogIn;
