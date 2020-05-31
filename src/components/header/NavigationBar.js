import React from 'react';
import { connect } from 'react-redux';
import { updateHeadingDisplay } from '../../actions/headingDisplayActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { SALMON_PINK } from '../../constants/AppColours';

function NavigationBar(props) {

  return (
    <Navbar bg='light' style={{ backgroundColor: SALMON_PINK }} expand='lg' fixed='top'>
      <Navbar.Brand href='#home'>QuantMods</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title='Stocks'>
            <NavDropdown.Item href='#stocks/expected-value' onClick={() => props.updateHeadingDisplay('Stocks', 'Expected Value')}>Expected Value</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Forwards'>
            <NavDropdown.Item href='#forwards/???'>???</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Futures'>
            <NavDropdown.Item href='#futures/???'>???</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Options'>
            <NavDropdown.Item href='#options/binomial' onClick={() => props.updateHeadingDisplay('Options', 'Binomial')}> Binomial</NavDropdown.Item>
            <NavDropdown.Item href='#options/black-scholes' onClick={() => props.updateHeadingDisplay('Options', 'Black-Scholes')}>Black-Scholes</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title='Swaps'>
            <NavDropdown.Item href='#swaps/interest-rate'>Interest Rate</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};

const mapDispatchToProps = dispatch => ({
  updateHeadingDisplay: (assetClassName, modelName) => dispatch(updateHeadingDisplay(assetClassName, modelName))
});

export default connect(null, mapDispatchToProps)(NavigationBar);