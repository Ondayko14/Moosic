import React from "react";

const homeBtn = "https://lit-escarpment-33126.herokuapp.com/";

const NoMatch = () => {
  return (
    <body>
    <div className="card text-secondary mb-4">
      <h4 className="card-header pb-3">Pardon our progress!</h4>
      <p className="card-body">This page is still being built.</p>
    </div>
    <a href="/"><button type="submit" className="btn bg-dark text-secondary flex-row justify-center">
            Back Home
          </button></a>
    </body>
  );
};

export default NoMatch;
