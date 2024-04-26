import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
        <main className="flex flex-col">
                <Header/>
                <Hero />
        </main>
    </>
  );
}
