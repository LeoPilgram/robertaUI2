import { useState } from 'react';
import { sing } from './actions';

export const useSongHandler = (
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setDialogMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  const [selectedSong, setSelectedSong] = useState('');

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
    handleSong,
  };
};
