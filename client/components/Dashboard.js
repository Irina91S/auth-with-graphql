import React, { useEffect } from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";

const Dashboard = props => {
  const {
    data: { user },
    history
  } = props;
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  return <div>Dashboard</div>;
};
export default graphql(query)(Dashboard);
