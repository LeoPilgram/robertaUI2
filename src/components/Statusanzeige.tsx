import { onDoneWithRoberta, onToggleButton } from '@/app/actions';
import React from 'react';

interface ServiceStatusToggleProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

const ServiceStatusToggle: React.FC<ServiceStatusToggleProps> = ({
  isChecked,
  setIsChecked,
}) => {
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
          <div className="alert alert-success">
            <span>Roberta kann jetzt verwendet werden.</span>
          </div>
        ) : (
          <div className="alert alert-info bg-error">
            <span>Services starten, um Roberta zu nutzen.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceStatusToggle;
