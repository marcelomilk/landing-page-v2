import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Value from "@/components/Value";
import ProductGlimpse from "@/components/ProductGlimpse";
import Diagnostic from "@/components/Diagnostic";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <Problem />
        <Value />
        <ProductGlimpse />
        <Diagnostic />
      </main>
      <Footer />
    </>
  );
}
