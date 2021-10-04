import React from "react";

const Title = (props) => {
  const { subtitle, titleEnd, titleStart } = props;
  return (
    <div className="text-center">
      <small className="text-success fw-bold">{subtitle}</small>
      <h1>
        {titleStart} <span className="header-text">{titleEnd}</span>
      </h1>
    </div>
  );
};

export default Title;
