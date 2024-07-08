'use client';

import DropdownMenu from '@/components/Dropdown';
import { CHECKPOINTS, DANCES, SONGS } from '@/constants';
import ServiceStatusToggle from '@/components/Statusanzeige';
import { useActionHandler } from '@/app/handleAction';
import { useDanceHandler } from '@/app/handleDance';
import { useSongHandler } from '@/app/handleSong';
import { useDeliveryHandler } from '@/app/handleDelivery';
import React, { useState } from 'react';

interface DrawerProps {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDialogMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Drawer: React.FC<DrawerProps> = ({
  setDialogOpen,
  setDialogMessage,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleAction } = useActionHandler();
  const { selectedDance, setSelectedDance, handleDance } =
    useDanceHandler(setDialogOpen, setDialogMessage);
  const { selectedSong, setSelectedSong, handleSong } =
    useSongHandler(setDialogOpen, setDialogMessage);
  const {
    selectedCheckpoint,
    setSelectedCheckpoint,
    handleDelivery,
  } = useDeliveryHandler(setDialogOpen, setDialogMessage);
  const handleDanceIfChecked = async () => {
    if (!isChecked) {
      window.alert('Bitte aktivieren Sie zuerst die Services!');
      return;
    }
    await handleDance();
  };

  const handleSongIfChecked = async () => {
    if (!isChecked) {
      window.alert('Bitte aktivieren Sie zuerst die Services!');
      return;
    }
    await handleSong();
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {
          <div className="drawer drawer-end flex">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              {
                <article className="prose text-left ml-5">
                  <div>
                    <div className="flex flex-row">
                      <h2>Services</h2>
                    </div>
                    <div>
                      <div>
                        <p>
                          Hier kannst Du Services von Roberta
                          ausführen.
                        </p>
                      </div>
                      <div>
                        <ServiceStatusToggle
                          isChecked={isChecked}
                          setIsChecked={setIsChecked}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              }
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {
                  <article className="prose text-left ml-5">
                    <div>
                      <h2>Entertainment</h2>
                      <div>
                        <div>
                          <p>
                            Hier kannst Du Entertainment-Optionen
                            auswählen.
                          </p>
                        </div>
                      </div>
                      <div className="text-left ml-1">
                        {' '}
                        {/* Adjust margin here */}
                        <DropdownMenu
                          items={DANCES}
                          type="Dancemoves"
                          onSelect={setSelectedDance}
                        />
                      </div>
                      <div>
                        <button
                          className="btn text-left ml-1 mt-4 btn-primary"
                          onClick={handleDanceIfChecked}
                        >
                          Dance
                        </button>
                      </div>
                      <div className="text-left ml-1 mt-4">
                        {' '}
                        {/* Adjust margin and add top margin */}
                        <DropdownMenu
                          items={SONGS}
                          type="Songs"
                          onSelect={setSelectedSong}
                        />
                      </div>
                      <div>
                        <button
                          className="btn text-left ml-1 mt-4 btn-primary"
                          onClick={handleSongIfChecked}
                        >
                          Play Song
                        </button>
                      </div>
                    </div>
                  </article>
                }
              </ul>
            </div>
          </div>
        }
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {
            <article className="prose text-left ml-5">
              <div>
                <h2>Delivery</h2>
                <div>
                  <div>
                    <p>Hier kannst Du Delivery-Optionen auswählen.</p>
                  </div>
                </div>
                <div className="text-left ml-1">
                  {' '}
                  {/* Adjust margin here */}
                  <DropdownMenu
                    items={CHECKPOINTS}
                    type="Checkpoints"
                    onSelect={setSelectedCheckpoint}
                  />
                </div>
                <div>
                  <button
                    className="btn text-left ml-1 mt-4 btn-primary"
                    onClick={handleDelivery}
                  >
                    Go, Roberta!
                  </button>
                </div>
              </div>
            </article>
          }
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
