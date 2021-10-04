import React from "react";
import notFound from "../../Image/404.png";
const NotFound = () => {
  return (
    <div className="text-center my-5 py-5">
      <img src={notFound} alt="error-msg" />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
