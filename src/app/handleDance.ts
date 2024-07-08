import { useState } from 'react';
import { dance } from './actions';

export const useDanceHandler = (
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setDialogMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const [selectedDance, setSelectedDance] = useState('');

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
    setDialogOpen,
    handleDance,
  };
};
