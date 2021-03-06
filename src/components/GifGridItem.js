import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="animate__animated card animate__fadeIn animate__slow">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
