
import Navbar from '../../components/Navbar';
import AdPlaceholder from '../../components/AdPlaceholder';

export default function About() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <main className="container" style={{ flex: 1, padding: '3rem 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>About Us</h1>

                <div className="card p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Mumbai Corporators</strong> is a dedicated portal aimed at providing transparent and accessible information about the Brihanmumbai Municipal Corporation (BMC) elections and its representatives.
                    </p>

                    <p style={{ marginBottom: '1rem' }}>
                        Our mission is to empower citizens with data regarding their local wards, candidates, and election results. We believe that an informed electorate is the backbone of a strong democracy.
                    </p>

                    <h2 style={{ fontSize: '1.5rem', margin: '1.5rem 0 1rem' }}>Data Sources</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        All data presented on this website is aggregated from publicly available sources, including:
                    </p>
                    <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                        <li>State Election Commission of Maharashtra</li>
                        <li>Official Brihanmumbai Municipal Corporation (BMC) Portal</li>
                        <li>News reports and public declarations</li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <AdPlaceholder height="200px" label="Sponsor Advertisement" />
                    </div>
                </div>
            </main>
        </div>
    );
}
