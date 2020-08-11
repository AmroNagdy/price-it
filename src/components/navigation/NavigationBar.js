import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import StyledLink from 'components/styles/StyledLink';
import GitHubLogo from 'components/navigation/GitHubLogo';
import EquityDividendDiscount from 'price-model/equities/EquityDividendDiscount';
import EquityDiscountedCashFlow from 'price-model/equities/EquityDiscountedCashFlow';
import BondPresentValue from 'price-model/bonds/BondPresentValue';
import ForwardDeterministicInterestRate from 'price-model/forwards/ForwardDeterministicInterestRate';
import OptionBinomialTree from 'price-model/options/OptionBinomialTree';
import OptionBlackScholes from 'price-model/options/OptionBlackScholes';
import * as ModelPaths from 'constants/ModelPaths';
import FutureCostOfCarry from 'price-model/futures/FutureCostOfCarry';

export default () => {

  return (
    <div style={{ height: '60px' }}>
      <Navbar bg='light' expand='md' fixed='top' className='custom-nav-bg'>
        <Navbar.Brand><StyledLink to='/'><span role='img' aria-label='logo'>💸</span>PriceIt</StyledLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title='Equities'>
              <NavDropdown.Item><StyledLink to={ModelPaths.EQUITY_DIVIDEND_DISCOUNT}>{EquityDividendDiscount.name}</StyledLink></NavDropdown.Item>
              <NavDropdown.Item><StyledLink to={ModelPaths.EQUITY_DISCOUNTED_CASH_FLOW}>{EquityDiscountedCashFlow.name}</StyledLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Bonds'>
              <NavDropdown.Item><StyledLink to={ModelPaths.BOND_PRESENT_VALUE}>{BondPresentValue.name}</StyledLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Forwards'>
              <NavDropdown.Item><StyledLink to={ModelPaths.FORWARD_TRADEABLE_UNDERLYING}>{ForwardDeterministicInterestRate.name}</StyledLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Futures'>
              <NavDropdown.Item><StyledLink to={ModelPaths.FUTURE_COST_OF_CARRY}>{FutureCostOfCarry.name}</StyledLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Options'>
              <NavDropdown.Item><StyledLink to={ModelPaths.OPTION_BINOMIAL_TREE}>{OptionBinomialTree.name}</StyledLink></NavDropdown.Item>
              <NavDropdown.Item><StyledLink to={ModelPaths.OPTION_BLACK_SCHOLES}>{OptionBlackScholes.name}</StyledLink></NavDropdown.Item>
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