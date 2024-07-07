'use client';

import Drawer from '@/components/Drawer';
import Map from '@/components/Map';
import { useActionHandler } from '../handleAction';

export default function ServicesPage() {
  const { dialogOpen, setDialogOpen, dialogMessage, handleAction } =
    useActionHandler();
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: 'calc(100vh - 140px)' }}
    >
      <Drawer />
      <div className="flex flex-col grow">
        <Map />
        <div className="flex flex-row justify-around m-5">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button"
          >
            Delivery
          </label>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Entertainment
          </label>
        </div>
      </div>
      <dialog
        id="my_modal_1"
        className="modal"
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <div className="modal-box bg-base-300">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{dialogMessage}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn bg-primary"
                onClick={() => setDialogOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
