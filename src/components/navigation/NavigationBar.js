import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import GitHubLogo from './GitHubLogo';

export default () => {

  return (
    <div style={{ height: `60px` }}>
      <Navbar bg='light' expand='md' fixed='top' >
        <Navbar.Brand href='#/'><span role='img' aria-label='logo'>💸</span>QuantMods</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title='Equities'>
              <NavDropdown.Item>Expected Value</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Forwards'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Futures'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Options'>
              <NavDropdown.Item href='#/options/binomial'>Binomial</NavDropdown.Item>
              <NavDropdown.Item href='#/options/black-scholes'>Black-Scholes</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Swaps'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          <GitHubLogo />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

};