import React, { useState } from "react";

const AuthForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    const { onSubmit } = props;
    onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form className="col s4" onSubmit={event => onSubmit(event)}>
        <div className="input-field">
          <input
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Email"
            autoComplete="username"
          />
        </div>
        <div className="input-field">
          <input
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            placeholder="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};
export default AuthForm;
