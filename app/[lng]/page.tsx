import Header from "@/app/[lng]/components/Header";
import Hero from "@/app/[lng]/components/Hero";
import Case from "@/app/[lng]/components/Case";
import Pricing from "@/app/[lng]/components/Pricing";
import FAQ from "@/app/[lng]/components/FAQ";
import Footer from "@/app/[lng]/components/Footer";

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
