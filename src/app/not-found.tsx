import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#6164F6] text-white px-4 py-12">
      <div className="flex flex-col items-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
          <circle cx="40" cy="40" r="40" fill="#fff" />
          <text x="50%" y="54%" textAnchor="middle" fill="#1A237E" fontSize="36" fontFamily="inherit" dy=".3em">404</text>
        </svg>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'FusionNeue, NoiGrotesk, sans-serif' }}>
          Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 text-center max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.<br />Let’s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-white hover:bg-gray-200 text-[#1A237E] font-semibold py-3 px-8 rounded-full shadow transition-colors duration-200 text-base md:text-lg"
          style={{ fontFamily: 'FusionNeue, NoiGrotesk, sans-serif' }}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
} 