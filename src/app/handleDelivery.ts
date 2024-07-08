import { useState } from 'react';
import { deliver } from './actions';

export const useDeliveryHandler = (
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setDialogMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState('');

  const handleDelivery = async () => {
    try {
      await deliver(selectedCheckpoint);
      setDialogMessage('Delivery erfolgreich ausgeführt');
    } catch (err: any) {
      setDialogMessage('Fehler: ' + err.message);
    }
    setDialogOpen(true);
  };

  return {
    selectedCheckpoint,
    setSelectedCheckpoint,
    handleDelivery,
  };
};
