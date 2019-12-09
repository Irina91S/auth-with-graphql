import React, { useEffect } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import query from "../queries/CurrentUser";
import logout from "../mutations/Logout";

const Header = props => {

  const onLogout = () => {
    const { mutate } = props;
    mutate({
      refetchQueries: [{ query }]
    });
  };

  const renderButtons = () => {
    const {
      data: { user, loading }
    } = props;
    if (loading) {
      return <div />;
    }

    if (user) {
      return (
        <li>
          <a onClick={() => onLogout()}> Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Create account</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(logout)(graphql(query)(Header));
