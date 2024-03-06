import { arts } from "@/infra/api/data";
import CardArt from "./CardsArt";
import Link from "next/link";


export default function CardsHome() {
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex items-center justify-between mb-4">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:*:bg-gray-500 cursor-pointer">
        {arts.map(art => (
          <Link key={art.id} href={`/collection/${art.id}`} passHref>
            <CardArt art={
              {
                id: art.id,
                imageSrc: art.imageSrc,
                artistName: art.artistName,
                price: art.price,
              }
            } />
          </Link>
        ))}
      </div>
    </div>
  );
}