'use client';

import React, { useState } from 'react';

const ServiceStatusToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleServices = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Services nutzen!</span>
          <input
            type="checkbox"
            className="toggle"
            checked={isChecked}
            onChange={toggleServices}
          />
        </label>
      </div>
      <div className="toast toast-top toast-end ml-5 mt-20">
        {' '}
        {isChecked ? (
          <div className="alert alert-info bg-error">
            <span>Roberta ist momentan im Einsatz.</span>
          </div>
        ) : (
          <div className="alert alert-success">
            <span>Roberta ist verfügbar.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceStatusToggle;
