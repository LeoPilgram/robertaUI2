import DropdownMenu from '@/components/Dropdown';
import { CHECKPOINTS, DANCES, SONGS } from '@/constants';
import ServiceStatusToggle from '@/components/Statusanzeige';

type DrawerProps = {
  handleAction: (actionType: String) => Promise<void>;
};

const Drawer: React.FC<DrawerProps> = ({
  handleAction: handleTest,
}) => {
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
                        <ServiceStatusToggle />
                      </div>
                      <button
                        className="btn text-left ml-1 mt-4 btn-primary"
                        onClick={(event) => handleTest('Test')}
                      >
                        Test
                      </button>
                      <button
                        className="btn text-left ml-1 mt-4 btn-primary"
                        onClick={(event) => handleTest('dance3')}
                      >
                        Dance!
                      </button>
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
                        />
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
                  />
                </div>
                <div>
                  <button className="btn text-left ml-1 mt-4 btn-primary">
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
