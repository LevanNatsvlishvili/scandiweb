import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Url from './Paths';
import Catalog from 'Modules/Catalog';
import Product from 'Modules/Product';
import Cart from 'Modules/Cart';


const routes = [
  {
    path: Url.CART,
    exact: true,
    component: Cart,
  },
  {
    path: Url.CATALOG,
    exact: true,
    component: Catalog,
  },
  {
    path: Url.PRODUCT,
    exact: true,
    component: Product,
  },
];

export const RenderRoutes = (switchProps = {}) => {
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
            redirect={route.redirect}
          />
        )
      })}
    </Switch>
  );
};
