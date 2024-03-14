import React from "react";
import { Container,Navbar } from "react-bootstrap"; 

const Footer=()=>{
    return (
      <footer className="footer px-0 px-lg-3 bg-dark" sticky="bottom" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '2px' }}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <p className="copyright text-center" style={{color:"white"}}>
              © {new Date().getFullYear()}{" "}
              <a href="mailto:DQ-DEV-Team@verizon.com" className="text-decoration-none text" style={{color:"red"}}>DQ-DEV-Team@verizon.com</a>
            </p>
          </Container>
        </Navbar>
      </footer>
      
    );
  }

export default Footer;
