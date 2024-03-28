import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./component/img/Home.png";
import logo1 from "./component/img/Attendance.jpeg";
import logo2 from "./component/img/assessment1.png";
import logo3 from "./component/img/monitor_system.png";
import logo4 from "./component/img/report.png";
import logo5 from "./component/img/user.png";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap-v5";
import { Container } from "react-bootstrap-v5";
import { Nav, NavbarCollapse, NavbarToggle } from "react-bootstrap";

function NavBar() {
  const obj = [
    { url: logo, name: "Home", path: "/" },
    { url: logo1, name: "Attendance", path: "/attendance" },
    { url: logo2, name: "Daily Assessment", path: "/assessment" },
    { url: logo3, name: "Monitor System", path: "/monitor" },
    { url: logo4, name: "Report", path: "/report" },
    { url: logo5, name: "User", path: "/user" },
  ];
  return (
    <div>
      <div className="flex-row">
        {obj.map((e, index) => (
          <div className="navbar" key={index}>
            <ul className="unol">
              <li>
                <NavLink to={e.path}>
                  <img src={e.url} alt={e.name} />
                  <div className="name">
                    <span>{e.name}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        ))}
      </div>
      
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
        <Container> */}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                <div className="flex-row">
                  {obj.map((e, index) => (
                    <div className="navbar" key={index}>
                      <ul className="unol">
                        <li>
                          <NavLink to={e.path}>
                            <img src={e.url} alt={e.name} />
                            <div className="name">
                              <span>{e.name}</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              }
            </Nav>
          </Navbar.Collapse> */}
          {/* <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                <div className="flex-row">
                  {obj.map((e, index) => (
                    <div className="navbar" key={index}>
                      <ul className="unol">
                        <li>
                          <NavLink to={e.path}>
                            <img src={e.url} alt={e.name} />
                            <div className="name">
                              <span>{e.name}</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              }
            </Nav>
          </NavbarCollapse> */}
        {/* </Container>
      </Navbar> */}
    </div>
  );
}
export default NavBar;