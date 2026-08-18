import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-bg px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Error 404</p>
      <h1 className="font-display text-6xl italic text-text-primary md:text-8xl">
        Nothing here
      </h1>
      <p className="max-w-sm text-sm text-muted">
        That page does not exist — the work is back on the landing page.
      </p>
      <Link
        to="/"
        className="group relative rounded-full text-sm transition-transform duration-300 hover:scale-105"
      >
        <span
          className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ inset: "-2px" }}
        />
        <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
          Back home
        </span>
      </Link>
    </main>
  );
}
