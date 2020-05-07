import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { roomId } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!roomId ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? `/enter-room` : `/room/${roomId}`,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
