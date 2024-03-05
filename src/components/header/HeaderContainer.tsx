import { ButtonDefault } from "@/components/commons/buttons/ButtonDefault";
import { textHeader } from "@/utils/variables";
import { Image } from "@mantine/core";
import Link from "next/link";

export default function HeaderContainer() {
  return (
    <div className="container mx-auto flex items-center justify-between mt-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </Link>
      <div className="flex items-center gap-6">
        <p className="text-white font-mono font-bold">{textHeader.explore}</p>
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
  );
}
