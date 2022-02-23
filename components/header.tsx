import { faHamburger, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState<boolean>(false);

  function getTheme(): string {
    return localStorage.getItem("theme") || "dark";
  }

  function setLocalTheme(val: string) {
    if (val == "dark") {
      setTheme(true);
      document.documentElement.classList.add(val);
    } else {
      setTheme(false);
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const val = getTheme() == "dark" ? "light" : "dark";
    localStorage.setItem("theme", val);
    setLocalTheme(val);
  }

  useEffect(() => {
    setLocalTheme(getTheme());
  });

  return (
    <header className="flex flex-col text-white rounded-b-2xl mobile-margin">
      <nav className="container flex justify-between mx-auto">
        <span className="text-2xl sm:text-3xl">Fırından Taze Developer</span>
        <div className="hidden space-x-5 text-xl sm:block">
          <Link href="/home">
            <a>Ana Sayfa</a>
          </Link>
          <Link href="/profile">
            <a>Profil</a>
          </Link>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 bg-indigo-500 rounded-full"
          >
            <FontAwesomeIcon icon={!theme ? faMoon : faSun} />
          </button>
        </div>
        <FontAwesomeIcon
          className="block sm:hidden"
          icon={faHamburger}
          size="2x"
        ></FontAwesomeIcon>
      </nav>
    </header>
  );
}
