import { Image } from "@mantine/core";

export default function CardArt({ art }: any) {
  return (
    <div className="flex rounded-lg py-1 px-3 gap-5">
      <div className="flex items-center justify-center  text-white font-mono font-bold text-xl rounded-full">
        {art.id}
      </div>
      <div className="relative card-back rounded-lg p-4 shadow-lg">
        <Image
          src={art.imageSrc}
          alt="art"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <p className="text-white font-mono font-bold text-xl">
          {art.artistName}
        </p>
        <div className="flex items-center justify-between ">
          <p className="text-gray-400 font-mono font-medium text-xs">
           vol <span className="text-purple-400">{art.price}</span> SOL
          </p>
        
        </div>
      </div>
    </div>
  );
}