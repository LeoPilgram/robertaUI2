'use client';

import { onDoneWithRoberta, onToggleButton } from '@/app/actions';
import React, { useState } from 'react';

const ServiceStatusToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleServices = async () => {
    if (!isChecked) {
      if (await onToggleButton()) {
        setIsChecked(!isChecked);
      } else {
        window.alert('Roberta wird bereits verwendet!');
      }
    } else {
      await onDoneWithRoberta();
      setIsChecked(!isChecked);
    }
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
            <span>Roberta kann jetzt verwendet werden.</span>
          </div>
        ) : (
          <div className="alert alert-success">
            <span>Services starten, um Roberta zu nutzen.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceStatusToggle;
