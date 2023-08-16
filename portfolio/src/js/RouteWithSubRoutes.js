import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  const { path, routes, data } = route;
  console.log(data);
  return (
    <Route
      path={path}
      render={(props) => <route.component {...props} routes={routes} data={data} />}
    />
  );
};

export default RouteWithSubRoutes;
