import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary dark:text-primary-dark mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold mb-4 text-text-heading dark:text-text-heading-dark">
          Page Not Found
        </h2>
        <p className="text-text-medium dark:text-text-medium-dark mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 