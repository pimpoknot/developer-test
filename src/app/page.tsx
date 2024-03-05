import CollectionContainer from "@/components/home/CollectionContainer";
import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="container mx-auto">
        <Hero />
        <SearchBar />
        <CollectionContainer />
      </div>
    </main>
  );
}
