import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import GitHubLogo from './GitHubLogo';
import DividendDiscount from 'model/stocks/DividendDiscount';
import DiscountedCashFlow from 'model/stocks/DiscountedCashFlow';
import BinomialTree from 'model/options/BinomialTree';
import BlackScholes from 'model/options/BlackScholes';
import * as ModelPaths from 'constants/ModelPaths';

export default () => {

  return (
    <div style={{ height: '60px' }}>
      <Navbar bg='light' expand='md' fixed='top' className='custom-nav-bg'>
        <Navbar.Brand href='#/'><span role='img' aria-label='logo'>💸</span>PriceIt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title='Stocks'>
              <NavDropdown.Item href={'#' + ModelPaths.DIVIDEND_DISCOUNT}>{DividendDiscount.name}</NavDropdown.Item>
              <NavDropdown.Item href={'#' + ModelPaths.DISCOUNTED_CASH_FLOW}>{DiscountedCashFlow.name}</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Forwards'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Futures'>
              <NavDropdown.Item>N/A</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Options'>
              <NavDropdown.Item href={'#' + ModelPaths.BINOMIAL_TREE}>{BinomialTree.name}</NavDropdown.Item>
              <NavDropdown.Item href={'#' + ModelPaths.BLACK_SCHOLES}>{BlackScholes.name}</NavDropdown.Item>
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