import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full p-4 shadow-lg z-10">
      <Image
        src="/img/logo.png"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <nav
        className={`absolute top-full left-0 w-full md:static md:block md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li>
            <a
              href="/"
              className="block py-2 text-gray-900"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/pacotes"
              className="block py-2 text-gray-900"
            >
              PROCEDIMENTOS
            </a>
          </li>
          <li>
            <a
              href="/seguro"
              className="block py-2 text-gray-900"
            >
              QUEM SOU
            </a>
          </li>
          <li>
            <a
              href="/docs"
              className="block py-2 text-gray-900"
            >
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="text-gray-900 px-4 py-2 rounded-full shadow-2xl border-2">
          RESERVA
        </button>
      </div>
    </header>
  );
}
