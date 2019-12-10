import React, { useEffect } from "react";
import { graphql } from "react-apollo";
import currentUserQuery from "../queries/CurrentUser";

export default WrappedComponent => {
  const RequireAuth = props => {
    const {
      data: { user, loading },
      history
    } = props;
    useEffect(() => {
      if (!loading && !user) {
        history.push("/login");
      }
    }, [user, loading]);
    return <WrappedComponent {...props} />;
  };
  return graphql(currentUserQuery)(RequireAuth);
};
