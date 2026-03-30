import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="flex flex-col items-center justify-center text-center">
        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold mb-2">Dra Karla Batista</h2>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <p className="text-gray-400">Email: contato@drakarlabatista.com</p>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h3 className="font-semibold mb-4">Redes sociais</h3>

          {/* 👇 FLEX EM COLUNA */}
          <div className="flex flex-row gap-3 text-xl">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
