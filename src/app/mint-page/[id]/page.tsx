"use client";
import { SubmitButton } from "@/components/commons/buttons/SubmitButton";
import { Progress } from "@/components/ui/progress";
import { useEffect, useMemo, useState } from "react";

function TraitComponent({
  title,
  value,
  percent,
}: {
  title: string;
  value: string;
  percent: string;
}) {
  return (
    <div className="bg-gray-800 p-4 roun rounded-lg">
      <div className="text-gray-400 text-xs">{title}</div>
      <div className="text-white mt-2">{value}</div>
      <div className="text-gray-400 text-xs mt-1">{percent} on supply</div>
    </div>
  );
}

export default function ItemDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(13);
  const [isMinting, setIsMinting] = useState(false);

  const fakeMint = useMemo(() => {
    setIsMinting(true);
    const timer = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }
  , []);

  //fake data fetching loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto flex justify-between items-start flex-col lg:flex-row">
        <div>
          <div className="text-gray-400 uppercase text-sm">traits</div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <TraitComponent title="Background" value="Red" percent="20%" />
            <TraitComponent title="Background" value="Red" percent="50%" />
            <TraitComponent title="Background" value="Red" percent="10%" />
          </div>
        </div>
        <div className="max-w-xl mt-3 lg:mt-0">
          <h1 className="text-xl font-bold font-mono tracking-wider">#0000</h1>
          <h2 className="text-gray-400 font-light mt-2 font-mono tracking-wider">
            collection name
          </h2>
          <p className="text-gray-400 mt-4 font-light font-mono tracking-wider">
            Rongoā is a gentle visual balance with simplicity that evokes peace
            and tranquility. The colors and shapes, although simple, work
            together to create an overall impression of calm and serenity.
          </p>

          

          <SubmitButton
            isLoading={isLoading}
            onClick={() => fakeMint}
          >
            {"<buy>"}
          </SubmitButton>
          {isMinting && <Progress value={progress} className="w-[100%] mt-3 bg-green-500" />}
          <div className="flex items-center mt-4">
            <span className="text-gray-400 mr-2">createdBy</span>
            <span className="text-violet-700">@authorNick</span>
          </div>
        </div>
      </div>
    </div>
  );
}
