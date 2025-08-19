import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-display text-navy">
          Welcome to LuxeMoments Events
        </h1>
        <p className="mt-4 text-lg font-body text-navy">
          Crafting Unforgettable Moments with Elegance
        </p>
      </main>
      <Footer />
    </div>
  );
}