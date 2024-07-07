import { useState } from 'react';
import { dance } from './actions';

export const useDanceHandler = () => {
  const [selectedDance, setSelectedDance] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleDance = async () => {
    try {
      await dance(selectedDance);
      setDialogMessage('Tanz erfolgreich ausgeführt');
    } catch (err: any) {
      setDialogMessage('Fehler: ' + err.message);
    }
    setDialogOpen(true);
  };

  return {
    selectedDance,
    setSelectedDance,
    dialogOpen,
    setDialogOpen,
    dialogMessage,
    handleDance,
  };
};
