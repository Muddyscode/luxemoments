import './globals.css';

export const metadata = {
  title: 'LuxeMoments Events',
  description: 'Crafting Unforgettable Moments with Elegance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}