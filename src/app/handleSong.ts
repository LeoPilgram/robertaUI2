import { useState } from 'react';
import { dance, sing } from './actions';

export const useSongHandler = () => {
  const [selectedSong, setSelectedSong] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleSong = async () => {
    try {
      await sing(selectedSong);
      setDialogMessage('Song erfolgreich abgespielt');
    } catch (err: any) {
      setDialogMessage('Fehler: ' + err.message);
    }
    setDialogOpen(true);
  };

  return {
    selectedSong,
    setSelectedSong,
    dialogOpen,
    setDialogOpen,
    dialogMessage,
    handleSong,
  };
};
