import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col text-white rounded-b-2xl mobile-margin">
      <nav className="container flex justify-between mx-auto">
        <span className="text-2xl">Fırından Taze Developer</span>
        <div className="hidden space-x-5 text-xl sm:block">
          <Link href="/home">
            <a>Ana Sayfa</a>
          </Link>
          <Link href="/profile">
            <a>Profil</a>
          </Link>
        </div>
        <FontAwesomeIcon icon={faHamburger} size="2x"></FontAwesomeIcon>
      </nav>
    </header>
  );
}
