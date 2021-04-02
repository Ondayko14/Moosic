import React from "react";

const Detail = ({ album, artists, name }) => {
  return (
    <div className="mt-2 ml-2">
      <div className="flex-row mb-3">
        <div className="mr-2">
          <label htmlFor={name} className="form-label">
            "{name}"
          </label>
        </div>
        <div className="">
          <label htmlFor={artists[0].name} className="form-label">
            by {artists[0].name}
          </label>
        </div>
      </div>
      <div className="album-image">
        <img src={album.images[0].url} alt={name} className="album-image"></img>
      </div>
    </div>
  );
};

export default Detail;
