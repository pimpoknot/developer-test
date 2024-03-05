import CardsHome from "../cards/CardsHome";

export default function CollectionContainer() {
  return (
      <div className="container max-w-6xl">
       <div className="mt-8">
         <span className="font-mono text-white text-3xl">{"<collections>"}</span>
         <div>
           <CardsHome />
         </div>
       </div>
     </div>
  )
}