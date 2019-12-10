import React, { useEffect } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import login from "../mutations/Login";
import query from "../queries/CurrentUser";

const Login = props => {
  const {
    data: { user },
    history
  } = props;
  useEffect(() => {
    if (user) {
        history.push('/dashboard')
    }
  }, [user]);

  const onSubmit = () => ({ email, password }) => {
    const { mutate } = props;
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
  };

  return (
    <div className="row">
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit()} />
    </div>
  );
};
export default graphql(login)(graphql(query)(Login));
