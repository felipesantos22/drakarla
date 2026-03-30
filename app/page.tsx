import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* IMAGEM */}
      <div className="relative w-full h-200">
        <Image
          src="/img/estetica.jpg"
          fill
          alt="Dra Karla Batista Estetica Corporal e Facial"
          className="object-cover"
        />
      </div>

      {/* RESTO DA PÁGINA */}
      <div className="flex min-h-screen items-center justify-center">
        <h1>Nossos serviços</h1>
      </div>
    </div>
  );
}
