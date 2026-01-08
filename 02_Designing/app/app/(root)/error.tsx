'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error for debugging / monitoring
    console.error(error);
  }, [error]);

  return (
    <main className="error-root" role="alert" aria-live="assertive">
      <div className="card">
        <div className="icon" aria-hidden>
          <svg viewBox="0 0 24 24" width="96" height="96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 8l8 8M16 8L8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Uh-oh — something broke</h1>
        <p className="muted">We couldn't load this part of the app. Try refreshing or go back home.</p>

        <div className="controls">
          <button className="btn primary" onClick={() => reset()}>Try again</button>
          <Link href="/" className="btn">Go home</Link>
        </div>

        <details className="details">
          <summary>Show error details</summary>
          <pre>{error?.message}</pre>
        </details>
      </div>

      <style jsx>{`
        .error-root {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          background: linear-gradient(180deg, #0f172a 0%, #071032 100%);
          color: #e6f0ff;
        }
        .card {
          max-width: 680px;
          width: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 2.25rem;
          text-align: center;
          box-shadow: 0 8px 30px rgba(2,6,23,0.6), inset 0 -1px 0 rgba(255,255,255,0.02);
        }
        .icon {
          margin: 0 auto 1rem;
          width: 96px;
          height: 96px;
          display: grid;
          place-items: center;
          color: #ff6b6b;
          animation: float 3s ease-in-out infinite;
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }
        .muted {
          margin: 0 0 1.25rem;
          color: rgba(230,240,255,0.8);
        }
        .controls {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          color: #e6f0ff;
          text-decoration: none;
          cursor: pointer;
          transition: transform .12s ease, background .12s ease;
        }
        .btn:hover { transform: translateY(-2px); background: rgba(255,255,255,0.035); }
        .btn.primary {
          background: linear-gradient(90deg,#8b5cf6,#06b6d4);
          border: none;
          color: white;
          box-shadow: 0 6px 22px rgba(99,102,241,0.15);
        }
        .details {
          text-align: left;
          margin-top: 1rem;
          color: rgba(230,240,255,0.9);
        }
        .details pre {
          margin: 0.5rem 0 0 0;
          background: rgba(0,0,0,0.25);
          padding: 0.75rem;
          border-radius: 8px;
          overflow: auto;
          white-space: pre-wrap;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px) rotate(-2deg); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

