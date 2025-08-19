const Footer = () => {
  return (
    <footer className="bg-navy py-4 text-ivory text-center">
      <div className="container mx-auto px-4">
        <p>&copy; 2025 LuxeMoments Events. All rights reserved.</p>
        <p className="mt-2">
          Email: info@luxemomentsevents.com | Phone: +234-805-123-4567
          Built by Mykel
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gold font-body">
            Facebook
          </a>
          <a href="#" className="hover:text-gold font-body">
            Instagram
          </a>
          <a href="#" className="hover:text-gold font-body">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;