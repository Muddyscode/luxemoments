import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-12 bg-navy text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display text-ivory mb-4">
          Ready to Plan Your Event?
        </h2>
        <p className="text-lg font-body text-ivory mb-6">
          Let LuxeMoments bring your vision to life with elegance.
        </p>
        <Link
          href="/contact"
          className="bg-gold text-navy px-6 py-3 rounded-full font-body hover:bg-blush-pink"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTA;