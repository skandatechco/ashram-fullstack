import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="Skandasramam Logo" width={120} height={60} />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/history">History</Link></li>
            <li><Link href="/poojas">Poojas</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/charity">Charity</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/donations">Donations</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          <button className="menu-toggle" aria-label="Toggle navigation menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
