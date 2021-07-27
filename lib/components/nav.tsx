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
            <h1 className="text-2xl">FinTech</h1>
          </a>
        </Link>
      </div>
      <nav className="flex flex-auto items-stretch justify-end">
        <Link href="/" passHref>
          <div className="group relative flex items-stretch">
            <a className="px-3 py-2 h-full bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900 leading-10 transition-colors">
              Home
            </a>
            <ul className="group-hover:block hidden absolute top-full right-0 shadow-lg w-48 text-center pt-2">
              <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                Drop Down One
              </li>
              <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                Drop Down Two
              </li>
              <li className="bg-blue-900 hover:bg-white hover:text-blue-900 py-2 transition-colors">
                Drop Down Three
              </li>
            </ul>
          </div>
        </Link>
        <Link href="/about">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10 transition-colors">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10">
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
}
