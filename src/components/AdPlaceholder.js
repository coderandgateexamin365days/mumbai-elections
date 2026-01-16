export default function AdPlaceholder({ width = '100%', height = '90px', label = 'Advertisement' }) {
    return (
        <div className="ad-slot" style={{ width, height }}>
            <div className="text-center">
                <span style={{ display: 'block', fontWeight: 'bold' }}>{label}</span>
                <span style={{ fontSize: '0.7rem' }}>Using Google AdSense</span>
            </div>
        </div>
    );
}
