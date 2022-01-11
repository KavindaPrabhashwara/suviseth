export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      getAccessToken() ?
        <Component {...props} />
        :
        (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
    }
  />

);