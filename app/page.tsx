import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Case from "@/app/components/Case";
import Pricing from "@/app/components/Pricing";

export default function Home() {
  return (
    <>
        <main className="flex flex-col">
                <Header/>
                <Hero />
                <Case />
                <Pricing/>
        </main>
    </>
  );
}
