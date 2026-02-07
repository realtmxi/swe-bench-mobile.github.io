import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-medium text-foreground">404</h1>
        <p className="mt-4 text-body text-muted">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-block px-5 py-2.5 text-[15px] font-medium bg-brand text-white rounded-full hover:bg-brand-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

