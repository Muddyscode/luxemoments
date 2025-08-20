import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/wedding-video-1.mp4"
      >
        <source src="/videos/wedding-video-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy bg-opacity-50"></div>
      <div className="relative z-10 text-center text-ivory">
        <h1 className="text-5xl font-display mb-4">
          Crafting Unforgettable Moments
        </h1>
        <p className="text-xl font-body mb-6">
          LuxeMoments Events brings elegance to weddings, corporate events, and more.
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

export default Hero;