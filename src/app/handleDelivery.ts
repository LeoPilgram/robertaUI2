import { useState } from 'react';
import { dance, deliver, sing } from './actions';

export const useDeliveryHandler = () => {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

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
    dialogOpen,
    setDialogOpen,
    dialogMessage,
    handleDelivery,
  };
};
