import React from "react";
export const Navbar = ({ count }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary row">
      <div className="col">Navbar</div>
      <div className="col"></div>
      <div className="col">
        корзина
        <div className="badge position-relative">
          <span className="position-absolute bottom-0 start-4 translate-middle badge rounded-pill bg-danger">
            {count}
          </span>
        </div>
      </div>
    </nav>
  );
};
