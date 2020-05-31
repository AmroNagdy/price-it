import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function NavigationBar() {

  return (
    <Navbar bg='light' expand='md' fixed='top'>
      <Navbar.Brand href='#home'>QuantMod</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title='Stocks'>
            <NavDropdown.Item href='#stocks/expected-value'>Expected Value</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Forwards'>
            <NavDropdown.Item href='#forwards/???'>???</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Futures'>
            <NavDropdown.Item href='#futures/???'>???</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Options'>
            <NavDropdown.Item href='#options/binomial'>Binomial</NavDropdown.Item>
            <NavDropdown.Item href='#options/black-scholes'>Black-Scholes</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Swaps'>
            <NavDropdown.Item href='#swaps/interest-rate'>Interest Rate</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};