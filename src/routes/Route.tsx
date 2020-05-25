import React from 'react';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';

import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { ApplicationState } from '../store';
import environment from '../config/environment';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  ReactGA.initialize(environment.analyticsCode);
  const roomId = useSelector<ApplicationState>(state => state.auth.data.roomId);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location, match: { params } }) => {
        if (isPrivate === !!roomId) {
          ReactGA.pageview(isPrivate ? 'room' : '/');
          return <Component />;
        }

        ReactGA.pageview(isPrivate ? 'enter-room' : 'room');
        return (
          <Redirect
            to={{
              pathname: isPrivate
                ? `/enter-room/${params?.id}`
                : `/room/${roomId}`,
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
