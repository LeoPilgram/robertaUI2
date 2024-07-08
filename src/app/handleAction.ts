import { useState } from 'react';
import { dance, runTest } from './actions';

export const useActionHandler = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [selectedDance, setSelectedDance] = useState('');

  const handleAction = async (actionType: string) => {
    try {
      if (actionType === 'test') {
        await runTest();
      } else if (actionType === 'dance') {
        await dance(selectedDance);
      }
      setDialogMessage('Aktion erfolgreich ausgeführt');
    } catch (err: any) {
      setDialogMessage('Fehler: ' + err.message);
    }
    setDialogOpen(true);
  };

  return {
    dialogOpen,
    setDialogOpen,
    dialogMessage,
    handleAction,
    selectedDance,
    setSelectedDance,
  };
};
