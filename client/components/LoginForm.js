import React from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import login from "../mutations/Login";
import query from "../queries/CurrentUser";

const Login = props => {
  const onSubmit = () => ({ email, password }) => {
    const { mutate } = props;
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      console.log(res);
      const errors = res.graphQLErrors.map(error => {
        return error.message;
      });
    });
  };

  return (
    <div className="row">
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit()}/>
    </div>
  );
};
export default graphql(login)(graphql(query)(Login));
