import './globals.css'; // Import global styles
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer

export const metadata = {
  title: 'My App',
  description: 'A Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar /> {/* Navbar appears at the top */}
        <main className="flex-grow">{children}</main> {/* Page content */}
        <Footer /> {/* Footer appears at the bottom */}
      </body>
    </html>
  );
}
