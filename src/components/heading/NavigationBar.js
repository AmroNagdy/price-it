import React from 'react';
import { connect } from 'react-redux';
import { loadModel } from '../../actions/modelActions';
import OptionsBlackScholes from '../../models/options/OptionsBlackScholes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavigationBar(props) {

  return (
    <div style={{ height: '60px' }}>
      <Navbar bg='light' expand='lg' fixed='top' style={{ height: '50px' }}>
        <Navbar.Brand onClick={() => props.loadModel(null)}>QuantMods</Navbar.Brand>
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
              <NavDropdown.Item>Binomial</NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.loadModel(OptionsBlackScholes)}>Black-Scholes</NavDropdown.Item>
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

const mapDispatchToProps = dispatch => ({
  loadModel: model => dispatch(loadModel(model))
});

export default connect(null, mapDispatchToProps)(NavigationBar);