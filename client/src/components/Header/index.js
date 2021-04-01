import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
        <img src="/assets/icons/moosic.png" className="moosic-logo mt-3" />
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              <Link to="donate">Donate</Link> {/* ???????? */}
            </>
          ) : (
            <>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
            <Link to="donate">Donate</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;