import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full h-14 shadow-md bg-blue-900 text-white flex pl-2 items-stretch">
      <div className="flex items-center">
        <Link href="/">
          <a className="flex items-center">
            <img
              className="h-10 mr-3"
              src="/logo.svg"
              alt="Logo"
              title="Logo"
            />
            <h1 className="text-2xl">Migaloo</h1>
          </a>
        </Link>
      </div>
      <nav className="flex flex-auto items-stretch justify-end">
        <Link href="/" passHref>
          <div className="group relative flex items-stretch">
            <a className="px-3 py-2 h-full bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900 leading-10 transition-colors">
              Maps
            </a>
            <ul className="group-hover:block hidden absolute top-full right-0 shadow-lg w-48 text-center pt-2">
              <Link href="/maps/sightings">
                <a>
                  <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                    Sightings
                  </li>
                </a>
              </Link>
              <Link href="/maps/tours">
                <a>
                  <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                    Tours
                  </li>
                </a>
              </Link>
              <Link href="/maps/vantage-points">
                <a>
                  <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                    Vantage Points
                  </li>
                </a>
              </Link>
            </ul>
          </div>
        </Link>
        <div className="group relative flex items-stretch">
          <a className="px-3 py-2 h-full bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900 leading-10 transition-colors">
            Info
          </a>
          <ul className="group-hover:block hidden absolute top-full right-0 shadow-lg w-48 text-center pt-2">
            <Link href="/info/tips">
              <a>
                <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                  Tips
                </li>
              </a>
            </Link>
            <Link href="/info/species">
              <a>
                <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                  Species
                </li>
              </a>
            </Link>
            <Link href="/info/behaviours">
              <a>
                <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                  Behaviours
                </li>
              </a>
            </Link>
            <Link href="/info/conservation">
              <a>
                <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                  Conservation
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <Link href="/offers">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10 transition-colors">
            Offers
          </a>
        </Link>
        <Link href="/about">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10 transition-colors">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10 transition-colors">
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
}
