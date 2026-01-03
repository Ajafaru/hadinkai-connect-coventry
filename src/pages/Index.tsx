import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Leadership />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
