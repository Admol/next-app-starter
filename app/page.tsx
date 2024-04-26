import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Case from "@/app/components/Case";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
        <main className="flex flex-col">
                <Header/>
                <Hero />
                <Case />
                <Pricing/>
                <FAQ/>
                <Footer/>
        </main>
    </>
  );
}
