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
        <Link href="/">
          <a className="px-3 py-2 bg-blue-900 text-white hover:bg-white hover:text-blue-900 leading-10 transition-colors">
            Home
          </a>
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
