import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col text-white rounded-b-2xl">
      <nav className="container flex justify-between mx-auto">
        <span className="text-2xl">Fırından Taze Developer</span>
        <div className="space-x-5 text-xl">
          <Link href="/home">
            <a>Ana Sayfa</a>
          </Link>
          <Link href="/profile">
            <a>Profil</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
