import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 10 }}>
      <div className="container" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🏛 Mumbai Corporators
        </Link>
        <div className="flex gap-4">
          <Link href="/about" className="btn">About</Link>
          <button className="btn btn-primary">2026 Updates</button>
        </div>
      </div>
    </nav>
  );
}
