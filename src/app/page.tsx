import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PortfolioGrid from '@/components/PortfolioGrid';
import Principles from '@/components/Principles';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PortfolioGrid />
      <Principles />
      <Services />

      <Footer />
    </>
  );
}