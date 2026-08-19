import React, { useState } from 'react';
import { Zap, Terminal, Heart } from 'lucide-react';

export function Footer({ onOpenEasterEgg }) {
  const [clickCount, setClickCount] = useState(0);

  const handleBadgeClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount >= 3) {
      onOpenEasterEgg();
      setClickCount(0);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#" className="navbar-brand">
              <div className="brand-icon">
                <Zap size={20} />
              </div>
              <div className="brand-text">
                <span className="brand-name">HyperFetch</span>
                <span className="brand-tag">ENGINE</span>
              </div>
            </a>
            <p className="footer-tagline">
              Resilient web data extraction layer built for modern engineering teams. Zero broken pipelines.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#sandbox">Live Sandbox</a></li>
              <li><a href="#architecture">Architecture Specs</a></li>
              <li><a href="#code-sdk">Developer SDK</a></li>
              <li><a href="#faq">Ethics & ToS</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Acdyon Challenge Track</h4>
            <div className="challenge-info-box">
              <span className="info-title">Part 2 — Premium Home Page</span>
              <span className="info-desc">MERN Tech Stack • Human Craftsmanship</span>
              <span className="easter-hint">
                <Terminal size={12} /> Easter egg active: Try Konami Code or triple-click the build badge!
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} HyperFetch Engine. Built for Acdyon Technologies Engineering Challenge.
          </div>

          <button
            onClick={handleBadgeClick}
            className="build-badge-btn"
            title="Click 3 times to unlock Dev HUD"
          >
            <span className="pulse-dot"></span>
            <span>BUILD: v1.4.2-acd {clickCount > 0 ? `(${clickCount}/3)` : ''}</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-base);
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2rem 0;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 800px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 1rem;
          max-width: 380px;
          line-height: 1.6;
        }

        .footer-col-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          font-size: 0.875rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--accent-cyan);
        }

        .challenge-info-box {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .info-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .easter-hint {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px dashed var(--border-subtle);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8125rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .build-badge-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .build-badge-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }
      `}</style>
    </footer>
  );
}
