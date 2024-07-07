import { useState } from 'react';
import { dance3, runTest } from './actions';

export const useActionHandler = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleAction = async (actionType: String) => {
    try {
      if (actionType === 'test') {
        await runTest();
      } else if (actionType === 'dance3') {
        await dance3();
      }
      setDialogMessage('Test erfolgreich ausgeführt');
    } catch (err: any) {
      setDialogMessage('Fehler: ' + err.message);
    }
    setDialogOpen(true);
  };

  return { dialogOpen, setDialogOpen, dialogMessage, handleAction };
};
