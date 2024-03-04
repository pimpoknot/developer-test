import CardsHome from "@/components/cards/CardsHome";
import { ButtonDefault } from "@/components/commons/buttons/ButtonDefault";
import { SearchInput } from "@/components/commons/inputs/SearchInput";
import { MantineProvider } from "@mantine/core";
import Image from "next/image";


const textHeader = {
  signIn:`<signIn>`,
  signUp:`<signUp>`,
  explore:`<Explore>`
}

export default function Home() {
  return (
    <MantineProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="container mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
          <div className="flex items-center gap-6">
            <p className="text-white font-mono font-bold">
              {textHeader.explore}
            </p>
            <div className="flex gap-5">
            <ButtonDefault className="p-6 rounded-lg h-12 w-36">
                <span className="font-mono font-bold">{textHeader.signUp}</span>
              </ButtonDefault>
              <ButtonDefault className="p-6 rounded-lg bg-violet-700 h-12 w-36">
                <span className="font-mono font-bold">{textHeader.signIn}</span>
              </ButtonDefault>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 max-w-6xl" >
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-white text-6xl font-bold">
              <span className="font-mono">A new <span className="text-violet-700">frontier</span> of digital art</span> 
            </h1>
            <p className="text-white mt-5 text-align font-mono font-medium text-gray-500 container max-w-5xl text-base/8 text-center">
              <span>The forever home of long-form generative art. Create, collect, and connect today. Pioneering the digital art revolution, one hash and group chat at a time.</span>
            </p>
          </div>
        </div>


        <div className="container w-full">
          <SearchInput  />
          <div className="mt-7 container  w-44">
            <ButtonDefault className=" p-6 rounded-lg bg-violet-700 h-12 w-full">
              <p className="text-white font-mono font-bold text-xs">
                {textHeader.explore}
              </p>
            </ButtonDefault>
          </div>
        </div>


        <div className="container max-w-6xl">
          <div className="mt-8">
            <span className="font-mono text-white text-3xl">{"<collections>"}</span>
            <div>
              <CardsHome />
            </div>
          </div>
        </div>
      </div>
    </main>
    </MantineProvider>
    
  );
}
