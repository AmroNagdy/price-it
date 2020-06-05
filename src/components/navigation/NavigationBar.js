import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default () => {

  const height = 50;

  return (
    <div style={{ height: `${height + 10}px` }}>
      <Navbar bg='light' expand='lg' fixed='top' style={{ height: `${height}px` }}>
        <Navbar.Brand href='#/'>QuantMods</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title='Stocks'>
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

            <NavDropdown title='Interest Rate Swaps'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

};