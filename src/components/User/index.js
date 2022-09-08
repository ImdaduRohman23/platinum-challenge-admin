import React from "react";
import user from "../../assets/user.svg";
import { Nav, NavDropdown } from "react-bootstrap";
import "./User.css"

const User = () => {

    const profile = {name: "Unis Badri", image: user}


    return (
        <NavDropdown 
          title={
            <div className="d-flex align-items-center gap-2">
                <img src={profile.image} />
                <p>{profile.name}</p>
            </div>
          }
          id="basic-nav-dropdown">
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => {
              localStorage.clear('token');
              window.location.reload();
            }}
              style={{color:"red"}}>Logout</NavDropdown.Item>
        </NavDropdown>
    )
}

export default User