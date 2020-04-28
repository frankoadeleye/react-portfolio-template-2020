import React from "react";
export const PageInfoText = ({ Big1, Big2, small }) => {
  return (
    <>
      <h1 className="lg-heading">
        {Big1}
        <span className="text-secondary">{Big2}</span>
      </h1>
      <h2 className="sm-heading">{small}</h2>
    </>
  );
};
