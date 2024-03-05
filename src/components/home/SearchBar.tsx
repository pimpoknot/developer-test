import { textHeader } from "@/utils/variables";
import { ButtonDefault } from "../commons/buttons/ButtonDefault";
import { SearchInput } from "../commons/inputs/SearchInput";

export default function SearchBar() {
  return (
    <div className="container w-full">
    <SearchInput />
    <div className="mt-7 container  w-44">
      <ButtonDefault className=" p-6 rounded-lg bg-violet-700 h-12 w-full">
        <p className="text-white font-mono font-bold text-xs">
          {textHeader.explore}
        </p>
      </ButtonDefault>
    </div>
  </div>
  )
}