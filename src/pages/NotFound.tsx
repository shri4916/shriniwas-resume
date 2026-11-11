import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-serif text-4xl text-primary">Page not found</h1>
        <Link to="/" className="mt-6 inline-block font-semibold text-accent underline-offset-4 hover:underline">
          Return to home
        </Link>
      </div>
    </div>
  );
}
