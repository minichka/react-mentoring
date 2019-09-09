import React from "react";

const Foto = ({ foto }) => {
  return (
    <div className="col-md-4 py-5">
      <div className="class-deck">
        <div className="card">
          <img
            className="card-img-top"
            src={foto.poster_path}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{foto.title}</h5>
            <p className="card-text">{foto.release_date}</p>
            <p className="card-text">
              <small className="text-muted">{foto.genre}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foto;
