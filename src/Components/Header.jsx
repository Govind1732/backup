import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [autoProfileOpen, setAutoProfileOpen] = useState(false);
  const [ruleProfileOpen, setRuleProfileOpen] = useState(false);
  const [mlProfileOpen, setmlProfileOpen] = useState(false);
  // const [mlProfileOpen, setmlProfileOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const handleSelect = (link) => {
    setSelectedLink(link);
  };

  return (
    <>
      <style>
        {`
      .dropdown-toggle::after {
        display: none;
      }
    `}
      </style>
      <header>
        <Navbar
          bg="black"
          variant="dark"
          expand="lg"
          className="d-flex flex-column">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="verizon-red-icon-black.png"
                className="rounded float-start"
                alt="verizon-icon"
                width="60"
                height="60"
              />
              <img
                src="DQaaSlogo.png"
                className="rounded float-start"
                alt="DQaas_logo"
                width="100"
                height="60"
              />
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text className="text-white">
                <h5>Data Quality As a Service</h5>
              </Navbar.Text>
            </Navbar.Collapse>

            <img
              src="beta3.png"
              className="rounded float-end"
              alt="beta3"
              width="40"
              height="60"
            />
          </Container>
          <Container>
            <Nav className="me-auto" defaultActiveKey="/">

              <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                
                onClick={() => {
                  handleSelect("/");
                }}>
                <span className="p-2" style={{
                  color: selectedLink === "/" ? "black" : "white",
                  backgroundColor:
                    selectedLink === "/" ? "white" : "black",
                }}>Home</span>
              </Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
              <NavDropdown
                title="Auto Profile"
                id="auto-profile-dropdown"
                show={autoProfileOpen}
                onMouseEnter={() => setAutoProfileOpen(true)}
                onMouseLeave={() => setAutoProfileOpen(false)}
                >
                <NavDropdown.Item
                  as={Link}
                  to="/autoProfile"
                  
                  onClick={() => {
                    handleSelect("/autoProfile");
                    setAutoProfileOpen(false);
                  }}>
                  Submit Request
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/autoviewedit"
          
                  onClick={() => {
                    handleSelect("/autoviewedit");
                    setAutoProfileOpen(false);
                  }}>
                  View/Edit Request
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Item>

              <Nav.Item>
              <NavDropdown
                title="Rule Profile"
                id="rule-profile-dropdown"
                show={ruleProfileOpen}
                onMouseEnter={() => setRuleProfileOpen(true)}
                onMouseLeave={() => setRuleProfileOpen(false)}
                >
                {/* <NavDropdown.Item
                  as={Link}
                  to="/rantdt"
                  
                  onClick={() => {
                    handleSelect("/rantdt");
                    setRuleProfileOpen(false);
                  }}>
                  DT RAN
                </NavDropdown.Item> */}

<NavDropdown.Item>
                  <DropdownButton
                   
                   key="end"
                   id="dropdown-button-drop-end"
                   drop="end"
                   variant="secondary"
                   title="DT RAN">
                   <Dropdown.Item
                     eventKey="1"
                     as={Link}
                     to="/rantdt"
                     
                     onClick={() => {
                       handleSelect("/rantdt");
                       setRuleProfileOpen(false);
                     }}>
                     Submit Request
                   </Dropdown.Item>
                   <Dropdown.Item
                     eventKey="2"
                     as={Link}
                     to="/rantdtviewedit"
                     
                     onClick={() => {
                       handleSelect("/rantdtviewedit");
                       setRuleProfileOpen(false);
                     }}>
                     View/Edit Request
                   </Dropdown.Item>
                 </DropdownButton>
                 </NavDropdown.Item>

                {/* <NavDropdown.Item
                  as={Link}
                  to="/corpData"
                  
                  onClick={() => {
                    handleSelect("/corpData");
                    setRuleProfileOpen(false);
                  }}>
                  1CorpData
                </NavDropdown.Item> */}

<NavDropdown.Item>
                  <DropdownButton
                   
                   key="end"
                   id="dropdown-button-drop-end"
                   drop="end"
                   variant="secondary"
                   title="1CorpData">
                   <Dropdown.Item
                     eventKey="1"
                     as={Link}
                     to="/corpData"
                     
                     onClick={() => {
                       handleSelect("/corpData");
                       setRuleProfileOpen(false);
                     }}>
                     Submit Request
                   </Dropdown.Item>
                   <Dropdown.Item
                     eventKey="2"
                     as={Link}
                     to="/corpDataviewedit"
                     
                     onClick={() => {
                       handleSelect("/corpDataviewedit");
                       setRuleProfileOpen(false);
                     }}>
                     View/Edit Request
                   </Dropdown.Item>
                 </DropdownButton>
                 </NavDropdown.Item>

                <NavDropdown.Item>
                  <DropdownButton
                   
                    key="end"
                    id="dropdown-button-drop-end"
                    drop="end"
                    variant="secondary"
                    title="All Projects">
                    <Dropdown.Item
                      eventKey="1"
                      as={Link}
                      to="/allProjects"
                      
                      onClick={() => {
                        handleSelect("/allProjects");
                        setRuleProfileOpen(false);
                      }}>
                      Submit Request
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="2"
                      as={Link}
                      to="/allprojectviewedit"
                      
                      onClick={() => {
                        handleSelect("/allprojectviewedit");
                        setRuleProfileOpen(false);
                      }}>
                      View/Edit Request
                    </Dropdown.Item>
                  </DropdownButton>
                </NavDropdown.Item>
              </NavDropdown>
              </Nav.Item>

              <NavDropdown
                title="ML Profile"
                id="ml-profile-dropdown"
                show={mlProfileOpen}
                onMouseEnter={() => setmlProfileOpen(true)}
                onMouseLeave={() => setmlProfileOpen(false)}
                >
                <NavDropdown.Item
                  as={Link}
                  to="/mlProfile"
                  
                  onClick={() => {
                    handleSelect("/mlProfile");
                    setmlProfileOpen(false);
                  }}>
                  Submit Request
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/viewedit"
                
                  onClick={() => {
                    handleSelect("/viewedit");
                    setmlProfileOpen(false);
                  }}>
                  Download Report
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
