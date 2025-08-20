import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import PortfolioSnippet from '../components/PortfolioSnippet';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PortfolioSnippet />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}