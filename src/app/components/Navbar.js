import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;