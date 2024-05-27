import DropdownMenu from '@/components/Dropdown';
import { DANCES, SONGS } from '@/constants';

export default function ServicesPage() {
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: 'calc(100vh - 140px)' }}
    >
      <div className="drawer drawer-end flex">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <div className="flex">
            {
              <article className="prose text-left ml-5">
                <div>
                  <h2>Services</h2>
                  <div>
                    <div>
                      <p>
                        Hier kannst Du Services von Roberta ausführen.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            }
          </div>
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
                    <DropdownMenu items={DANCES} type="Dancemoves" />
                  </div>
                  <div>
                    <button className="btn text-left ml-1 mt-4 btn-primary">
                      Dance
                    </button>
                  </div>
                  <div className="text-left ml-1 mt-4">
                    {' '}
                    {/* Adjust margin and add top margin */}
                    <DropdownMenu items={SONGS} type="Songs" />
                  </div>
                  <div>
                    <button className="btn text-left ml-1 mt-4 btn-primary">
                      Play Song
                    </button>
                  </div>
                </div>
              </article>
            }
          </ul>
        </div>
      </div>
      <div className="flex flex-row grow">
        <div className="bg-red-400 flex grow ml-5 mb-5">Hello</div>
        <div className="flex flex-col justify-start">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary m-3"
          >
            Delivery
          </label>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary m-3"
          >
            Entertainment
          </label>
        </div>
      </div>
    </div>
  );
}
