import React from 'react';

export default function Button({color, handleClick}) {
    return (
        <button className={`btn btn-lg btn-${color}`} id="actionButton" onClick={(e) => handleClick()}></button>
  );
};
