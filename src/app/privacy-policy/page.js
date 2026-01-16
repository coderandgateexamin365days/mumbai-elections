export default function PrivacyPolicy() {
    return (
        <div className="container" style={{ padding: '3rem 0', maxWidth: '800px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="card p-4">
                <h2 style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.5rem' }}>1. Introduction</h2>
                <p>Welcome to <strong>Mumbai Corporators</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect and how we use it.</p>

                <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Information We Collect</h2>
                <p>We do not collect personal data like names or emails unless you voluntarily contact us. However, we use third-party tools that may collect anonymous usage data:</p>
                <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                    <li><strong>Google AdSense:</strong> Vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                    <li><strong>Google Analytics:</strong> We may use analytics to understand website traffic sources.</li>
                </ul>

                <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Cookies and Web Beacons</h2>
                <p>Like any other website, Mumbai Corporators uses 'cookies'. These cookies are used to store information including visitors' preferences. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</p>
                <p style={{ marginTop: '0.5rem' }}>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Google Ads Settings</a>.</p>

                <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>4. Disclaimer</h2>
                <p>This website is an information portal and is <strong>not affiliated with the Government of Maharashtra or the BMC</strong>. All data is sourced from public records. We verify information to the best of our ability but do not guarantee its absolute accuracy.</p>

                <h2 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us via the website contact form.</p>
            </div>
        </div>
    );
}
