import React, { useEffect } from "react";
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo";

import signUp from "../mutations/SignUp";
import query from "../queries/CurrentUser";

const SignUp = props => {
  const {
    data: { user },
    history
  } = props;
  useEffect(() => {
    if (user) {
      history.push("/dashboard");
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
    <div>
      <h3>SignUp</h3>
      <AuthForm onSubmit={onSubmit()} />
    </div>
  );
};
export default graphql(signUp)(graphql(query)(SignUp));
