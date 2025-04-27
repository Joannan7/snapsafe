import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to home!</h1>
      <p>
        <Link href="/map">
          <button style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Go to Map Page
          </button>
        </Link>
      </p>
    </div>
  );
}
