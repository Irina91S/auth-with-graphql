import React, { useState } from "react";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log(email);
  };
  return (
    <div className="row">
      <form className="col s4">
        <div className="input-field">
          <label>Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <button className="btn" onClick={onSubmit()}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default AuthForm;
