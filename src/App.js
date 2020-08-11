import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import StyledApp from 'components/styles/StyledApp';
import NavigationBar from 'components/navigation/NavigationBar';
import ModelView from 'components/model-view/ModelView';
import Landing from 'components/landing/Landing';
import EquityDividendDiscount from 'price-model/equities/EquityDividendDiscount';
import EquityDiscountedCashFlow from 'price-model/equities/EquityDiscountedCashFlow';
import BondPresentValue from 'price-model/bonds/BondPresentValue';
import ForwardDeterministicInterestRate from 'price-model/forwards/ForwardDeterministicInterestRate';
import OptionBinomialTree from 'price-model/options/OptionBinomialTree';
import OptionBlackScholes from 'price-model/options/OptionBlackScholes';
import * as ModelPaths from 'constants/ModelPaths';

export default () => {

  return (
    <StyledApp>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={ModelPaths.EQUITY_DIVIDEND_DISCOUNT} render={() => <ModelView model={EquityDividendDiscount} />} />
          <Route path={ModelPaths.EQUITY_DISCOUNTED_CASH_FLOW} render={() => <ModelView model={EquityDiscountedCashFlow} />} />
          <Route path={ModelPaths.BOND_PRESENT_VALUE} render={() => <ModelView model={BondPresentValue} />} />
          <Route path={ModelPaths.FORWARD_TRADEABLE_UNDERLYING} render={() => <ModelView model={ForwardDeterministicInterestRate} />} />
          <Route path={ModelPaths.OPTION_BINOMIAL_TREE} render={() => <ModelView model={OptionBinomialTree} />} />
          <Route path={ModelPaths.OPTION_BLACK_SCHOLES} render={() => <ModelView model={OptionBlackScholes} />} />
          <Route path='/' render={() => <Landing />} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );

};