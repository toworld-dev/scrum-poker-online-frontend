import React from 'react';
import { useSelector } from 'react-redux';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { ApplicationState } from '../store';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const roomId = useSelector<ApplicationState>(state => state.auth.data.roomId);

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
