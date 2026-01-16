import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      background: 'white',
      borderBottom: '3px solid #f58634', // Saffron bottom border
      padding: '10px 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        {/* Logo / Brand */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#f58634',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>
            M
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', lineHeight: '1' }}>
              MyCorporator
            </div>
            <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Mumbai Elections
            </div>
          </div>
        </Link>

        {/* Simple Links */}
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', fontWeight: '500' }}>
          <Link href="/" style={{ color: '#f58634', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
          <Link href="/privacy-policy" style={{ color: '#333', textDecoration: 'none' }}>Privacy</Link>
        </div>

      </div>
    </nav>
  );
}
