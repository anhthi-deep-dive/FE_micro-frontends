import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { Tab } from "./common/constants";
import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { Holdings } from "./pages/Dashboard/Holdings";
import { OrderMgt } from "./pages/Dashboard/OrderMgt";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard />
          <Route path={Tab.CryptoInfo}>
            <CryptoInfo />
          </Route>
          <Route path={Tab.Holdings}>
            <Holdings />
          </Route>
          <Route path={Tab.OrderMgt}>
            <OrderMgt />
          </Route>
          <Route path="/">
            <Redirect to={Tab.CryptoInfo} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
