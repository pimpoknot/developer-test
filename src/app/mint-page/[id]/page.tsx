'use client'
import { SubmitButton } from "@/components/commons/buttons/SubmitButton";
import { useEffect, useState } from "react";

export default function ItemDetail() {
  const [isLoading, setIsLoading] = useState(true);

  //fake data fetching loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto flex justify-between items-start">
        <div>
          <div className="text-gray-400 uppercase text-sm">traits</div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-400 text-xs">Background</div>
              <div className="text-white mt-2">Rainbow</div>
              <div className="text-gray-400 text-xs mt-1">13% on supply</div>
            </div>
          </div>
        </div>
        <div className="max-w-xs">
          <h1 className="text-4xl font-bold">#0000</h1>
          <h2 className="text-xl font-semibold mt-2">collection name</h2>
          <p className="text-gray-400 mt-4">
            Rongoā is a gentle visual balance with simplicity that evokes peace
            and tranquility. The colors and shapes, although simple, work
            together to create an overall impression of calm and serenity.
          </p>
          <SubmitButton isLoading={isLoading}>buy</SubmitButton>{" "}
          <div className="flex items-center mt-4">
            <span className="text-gray-400 mr-2">createdBy</span>
            <span className="text-violet-700">@authorNick</span>
          </div>
        </div>
      </div>
    </div>
  );
}
