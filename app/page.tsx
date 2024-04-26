import Image from "next/image";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="pl-14 pr-14 w-full bg-gradient-to-b from-transparent via-transparent ">
                <Header/>
                <Hero/>
            </div>
        </main>
    </>
  );
}
