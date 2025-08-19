import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-ivory py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="LuxeMoments Events Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>
        <nav className="flex space-x-4">
          <Link href="/" className="text-navy hover:text-gold font-body text-lg">
            Home
          </Link>
          <Link href="/about" className="text-navy hover:text-gold font-body text-lg">
            About
          </Link>
          <Link href="/services" className="text-navy hover:text-gold font-body text-lg">
            Services
          </Link>
          <Link href="/portfolio" className="text-navy hover:text-gold font-body text-lg">
            Portfolio
          </Link>
          <Link href="/blog" className="text-navy hover:text-gold font-body text-lg">
            Blog
          </Link>
          <Link href="/contact" className="text-navy hover:text-gold font-body text-lg">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;