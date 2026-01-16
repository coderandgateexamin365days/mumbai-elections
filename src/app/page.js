'use client';
import { useState, useMemo } from 'react';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import wardsData from '@/data/wards.json';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('2017'); // '2017' or '2025'

  // Filter logic
  const filteredWards = useMemo(() => {
    if (!searchTerm) return wardsData;
    const lower = searchTerm.toLowerCase();
    return wardsData.filter(ward =>
      ward.ward_no.toLowerCase().includes(lower) ||
      ward.corporator_name.toLowerCase().includes(lower) ||
      ward.party.toLowerCase().includes(lower) ||
      ward.area.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  return (
    <div className="main-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 10px' }}>

      {/* Top Banner Ad */}
      <AdPlaceholder type="banner" />

      {/* Main Grid Layout: Content (Left) + Sidebar (Right) */}
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>

        {/* --- LEFT COLUMN: Main Content --- */}
        <div style={{ flex: '3 1 0', minWidth: '300px' }}>

          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontSize: '24px', color: '#111', marginBottom: '5px' }}>
              Brihanmumbai Municipal Corporation (BMC) Election Results
            </h1>
            <p style={{ color: '#666', fontSize: '13px' }}>
              Find details of all 227 Corporators, Wards, and Reservations.
            </p>
          </div>

          {/* Navigation Tabs (Reference Style) */}
          <div className="tabs">
            <div
              className={`tab ${activeTab === '2025' ? 'active' : ''}`}
              onClick={() => setActiveTab('2025')}
            >
              Election 2025 (Updates)
            </div>
            <div
              className={`tab ${activeTab === '2017' ? 'active' : ''}`}
              onClick={() => setActiveTab('2017')}
            >
              2017 Corporators List
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ border: '1px solid #ddd', borderTop: 'none', padding: '15px', background: 'white' }}>

            {activeTab === '2017' ? (
              <>
                <p style={{ fontSize: '13px', marginBottom: '15px' }}>
                  Below is the complete list of winners from the 2017 general election.
                </p>

                <div className="election-table-container">
                  <table className="election-table">
                    <thead>
                      <tr>
                        <th style={{ width: '50px' }}>Ward</th>
                        <th>Corporator Name</th>
                        <th style={{ width: '80px' }}>Party</th>
                        <th>Reservation</th>
                        <th style={{ width: '60px' }}>Votes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredWards.map((ward) => (
                        <tr key={ward.ward_no}>
                          <td style={{ fontWeight: 'bold', color: '#f58634' }}>{ward.ward_no}</td>
                          <td>
                            <div style={{ fontWeight: '600' }}>{ward.corporator_name}</div>
                            <div style={{ fontSize: '11px', color: '#888' }}>{ward.area}</div>
                          </td>
                          <td>
                            <span style={{
                              padding: '2px 6px',
                              borderRadius: '4px',
                              background: '#eee',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}>
                              {ward.party_code || ward.party.substring(0, 3)}
                            </span>
                          </td>
                          <td style={{ fontSize: '12px' }}>{ward.reservation}</td>
                          <td style={{ fontWeight: '500' }}>{ward.votes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredWards.length === 0 && (
                  <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                    No records found for "{searchTerm}"
                  </div>
                )}
              </>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h3 style={{ color: '#f58634' }}>2025/2026 Election Updates</h3>
                <p style={{ marginTop: '10px' }}>
                  The dates for the upcoming BMC elections have not been announced yet.
                  <br />
                  Stay tuned for live updates.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <AdPlaceholder type="feed" />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* --- RIGHT COLUMN: Sidebar --- */}
        <div style={{ flex: '1 1 0', minWidth: '250px' }}>

          {/* Sidebar Search */}
          <div className="sidebar-widget">
            <div className="widget-title">Search Data</div>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search Ward or Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 10px 10px 35px',
                  border: '1px solid #ccc',
                  borderRadius: '0' // Boxy look like reference
                }}
              />
              <Search
                size={16}
                style={{ position: 'absolute', left: '10px', top: '12px', color: '#999' }}
              />
            </div>
          </div>

          {/* Sidebar Ads */}
          <div className="sidebar-widget">
            <div className="widget-title">Sponsored</div>
            <AdPlaceholder type="box" />
            <div style={{ margin: '10px 0' }}></div>
            <AdPlaceholder type="box" />
          </div>

          {/* Important Links */}
          <div className="sidebar-widget">
            <div className="widget-title">Quick Links</div>
            <ul style={{ listStyle: 'none', fontSize: '13px' }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#0056b3', textDecoration: 'none' }}>▶ BMC Official Website</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#0056b3', textDecoration: 'none' }}>▶ State Election Commission</a>
              </li>
              <li>
                <Link href="/privacy-policy" style={{ color: '#0056b3', textDecoration: 'none' }}>▶ Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
