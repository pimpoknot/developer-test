import CardCollection from "@/components/cards/CardCollection";
import { CarouselComponent } from "@/components/carousel/CarouselComponent";
import { Separator } from "@/components/ui/separator";

export default function CollectionPage() {
  return (
    <div className="container mt-8">
      <div className="flex justify-center">
        <div>
          <CardCollection />
        </div>
        <div className="max-w-96 w-full">
          <div className="col-span-1 h-full w-full flex justify-center bg-zinc-900 rounded-sm"></div>
        </div>
      </div>

      <div className="mt-9">
        <Separator />
        <CarouselComponent />
      </div>
    </div>
  );
}
