import React from "react";

const NoMatch = () => {
  return (
    <body>
      <div className="card text-secondary mb-4">
        <h4 className="card-header pb-3">Pardon our progress!</h4>
        <p className="card-body">This page is still being built.</p>
        <a href="/">
        <button
          type="submit"
          className="signup-btn m-back mb-4"
        >
          Back Home
        </button>
      </a>
      </div>
      
    </body>
  );
};

export default NoMatch;
