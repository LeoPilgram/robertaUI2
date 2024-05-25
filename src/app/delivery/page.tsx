import DropdownMenu from '@/components/Dropdown';
import { DANCES, SONGS } from '@/constants';
import Link from 'next/link';

export default function DeliveryPage() {
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        {
          <article className="prose text-left ml-5">
            <div>
              <h2>Delivery</h2>
              <div>
                <div>
                  <p>Hier kannst Du Delivery-Optionen auswählen.</p>
                </div>
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-primary"
                >
                  Entertainment
                </label>
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
                      Hier kannst Du Entertainment-Optionen auswählen.
                    </p>
                  </div>
                </div>
                <div className="text-left ml-1">
                  {' '}
                  {/* Adjust margin here */}
                  <DropdownMenu items={DANCES} type="Dancemoves" />
                </div>
                <div className="text-left ml-1 mt-4">
                  {' '}
                  {/* Adjust margin and add top margin */}
                  <DropdownMenu items={SONGS} type="Songs" />
                </div>
                <div>
                  <Link href="/delivery">
                    <button className="btn text-left ml-1 mt-4 btn-primary">
                      Bestätigen
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          }
        </ul>
      </div>
    </div>
  );
}
