import { cards } from "@/data/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 flex flex-col">
      {/* IMAGEM TOPO */}
      <div className="w-full flex justify-center">
        <Image
          src="/img/estetica.jpg"
          width={1200}
          height={500}
          alt="Dra Karla Batista Estetica Corporal e Facial"
          className="object-cover w-full h-125"
        />
      </div>

      {/* TITULO */}
      <div className="bg-blue-400 m-20 p-4">
        <h1 className="uppercase text-center text-4xl">Nossos serviços</h1>
      </div>

      {/* CARDS */}
      <div className="flex flex-wrap justify-evenly gap-6 mb-20 mx-20 bg-amber-500 p-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white w-75 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* IMAGEM */}
            <Image
              src={card.img}
              width={300}
              height={200}
              alt={card.title}
              className="object-cover w-full h-50"
            />

            {/* TEXTO */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
