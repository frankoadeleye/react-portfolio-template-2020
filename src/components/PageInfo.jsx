import React from "react";
export const PageInfoText = ({ Big1, Big2, small, className }) => {
  return (
    <>
      {/*add by udayskai - send className to child component as props , if paraent want to apply any style with its own className */}
      <h1 className={`lg-heading  ${className}`}>
        {Big1}
        <span className="text-secondary">{Big2}</span>
      </h1>
      <h2 className="sm-heading">{small}</h2>
    </>
  );
};
