import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StyledApp from 'components/styles/StyledApp';
import NavigationBar from 'components/navigation/NavigationBar';
import Model from 'components/model/Model';
import Landing from 'components/landing/Landing';
import DividendDiscount from 'model/stocks/DividendDiscount';
import DiscountedCashFlow from 'model/stocks/DiscountedCashFlow';
import BinomialTree from 'model/options/BinomialTree';
import BlackScholes from 'model/options/BlackScholes';
import * as ModelPaths from 'constants/ModelPaths';

export default () => {

  return (
    <StyledApp>
      <HashRouter>
        <NavigationBar />
        <Switch>
          <Route path={ModelPaths.DIVIDEND_DISCOUNT} render={() => <Model model={DividendDiscount} />} />
          <Route path={ModelPaths.DISCOUNTED_CASH_FLOW} render={() => <Model model={DiscountedCashFlow} />} />
          <Route path={ModelPaths.BINOMIAL_TREE} render={() => <Model model={BinomialTree} />} />
          <Route path={ModelPaths.BLACK_SCHOLES} render={() => <Model model={BlackScholes} />} />
          <Route path='/' render={() => <Landing />} />
        </Switch>
      </HashRouter>
    </StyledApp>
  );

};