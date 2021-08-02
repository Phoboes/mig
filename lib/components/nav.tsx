import { useState } from "react";
import Link from "next/link";

function NavLink({ link, text, isDropdown = false }) {
  const classes = isDropdown
    ? "hover:bg-white bg-blue-100 text-blue-900 md:text-white md:bg-blue-900 md:hover:bg-white md:hover:text-blue-900 hover:shadow-inner"
    : "bg-blue-900 hover:bg-white hover:text-blue-900";
  return (
    <Link href={link}>
      <a className={`${classes} py-2 transition-colors leading-10 px-3 block`}>
        {text}
      </a>
    </Link>
  );
}

function DropDown({ text, items, subMenu, setSubMenu }) {
  const markup = items.map(([link, text]) => {
    return (
      <NavLink link={link} text={text} key={`navlink-${link}`} isDropdown />
    );
  });
  return (
    <div className="group relative flex items-stretch flex-wrap">
      <a
        className="px-3 py-2 h-full bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900 group-active:bg-white group-active:text-blue-900 leading-10 transition-colors w-full md:w-auto"
        onClick={() => setSubMenu(text)}
        onMouseEnter={() => setSubMenu(text)}
        onMouseLeave={() => setSubMenu(null)}
      >
        {text}
      </a>
      <div
        className={`group-hover:block ${
          subMenu === text ? "block" : "hidden"
        } md:absolute top-full right-0 md:shadow-lg w-full md:w-48 text-center md:pt-2`}
      >
        {markup}
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  return (
    <header
      className="fixed top-0 left-0 w-full h-14 shadow-md bg-blue-900 text-white flex pl-2 items-stretch z-50"
      onMouseLeave={() => setOpen(false)}
    >
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
        <h3
          className="px-3 py-2 h-full leading-10 md:hidden block cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close Menu" : "Open Menu"}
        </h3>
        <div
          className={`md:flex ${
            open ? "flex" : "hidden"
          } md:static absolute top-14 w-full flex-col md:flex-row md:w-auto text-center`}
        >
          <DropDown
            subMenu={subMenu}
            setSubMenu={setSubMenu}
            text={"Maps"}
            items={[
              ["/maps/sightings", "Sightings"],
              ["/maps/tours", "Tours"],
              ["/maps/vantage-points", "Vantage Points"],
            ]}
          />
          <DropDown
            subMenu={subMenu}
            setSubMenu={setSubMenu}
            text={"Info"}
            items={[
              ["/info/behaviours", "Behaviours"],
              ["/info/conservation", "Conservation"],
              ["/info/species", "Species"],
              ["/info/tips", "Tips"],
            ]}
          />
          <NavLink link={"/offers"} text="Offers" />
          <NavLink link={"/about"} text="About" />
          <NavLink link={"/contact"} text="Contact" />
          <NavLink link={"/auth/login"} text="Login" />
          <NavLink link={"/auth/sign-up"} text="Sign Up" />
        </div>
      </nav>
    </header>
  );
}
