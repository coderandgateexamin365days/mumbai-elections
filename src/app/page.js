"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, User, Flag } from 'lucide-react';
import Navbar from '../components/Navbar';
import AdPlaceholder from '../components/AdPlaceholder';
import wards from '../data/wards.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWards = wards.filter(ward =>
    ward.corporator_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ward.ward_no.includes(searchTerm) ||
    ward.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="container" style={{ flex: 1, paddingBottom: '2rem' }}>

        {/* Hero / Search Section */}
        <div style={{ padding: '3rem 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
            Find Your Ward & Corporator
          </h1>
          <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Comprehensive data on 2017 & upcoming 2026 BMC elections for Mumbai.
          </p>

          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#888' }} size={20} />
            <input
              type="text"
              placeholder="Search by Ward No, Corporator Name, or Party..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                borderRadius: '50px',
                border: '1px solid var(--border)',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>

        <AdPlaceholder height="120px" label="Top Banner Advertisement" />

        {/* Results Grid */}
        <div className="mt-4">
          <h2 style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem' }}>
            Ward List ({filteredWards.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredWards.map((ward) => (
              <div key={ward.ward_no} className="card">
                <div style={{ padding: '1.5rem' }}>
                  <div className="flex justify-between items-center mb-4">
                    <span style={{
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      Ward {ward.ward_no}
                    </span>
                    <span className="text-muted text-sm">{ward.area}</span>
                  </div>

                  <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#eee',
                      borderRadius: '50%',
                      margin: '0 auto 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <User size={30} color="#888" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{ward.corporator_name}</h3>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Flag size={16} className="text-muted" />
                      <span style={{ fontWeight: '500' }}>{ward.party}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: '0.8rem', color: '#28a745', fontWeight: 'bold' }}>{ward.status}</span>
                      <span className="text-muted" style={{ fontSize: '0.8rem' }}>• {ward.votes.toLocaleString()} votes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWards.length === 0 && (
            <div className="text-center p-4 text-muted">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>

        <div className="mt-4">
          <AdPlaceholder height="250px" label="In-Feed Advertisement" />
        </div>

      </main>

      <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '3rem 0', marginTop: 'auto' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Mumbai Corporators</h4>
              <p style={{ color: '#adb5bd', fontSize: '0.9rem' }}>
                Your trusted source for BMC election results, corporator details, and civic updates.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', color: '#adb5bd', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/">Home</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about">About Us</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Data Source</h4>
              <p style={{ color: '#adb5bd', fontSize: '0.9rem' }}>
                Data disclaimer: Results sourced from State Election Commission & public records. This is an information portal, not an official government site.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
