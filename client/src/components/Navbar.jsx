import React, { useState, useEffect } from 'react';
import { Zap, Moon, Sun, Terminal, ExternalLink, Menu, X } from 'lucide-react';

export function Navbar({ theme, toggleTheme, onOpenEasterEgg }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [apiPing, setApiPing] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ping express backend for live health indicator
    const fetchHealth = async () => {
      try {
        const start = Date.now();
        const res = await fetch('/api/health');
        if (res.ok) {
          const latency = Date.now() - start;
          setApiPing(`${latency}ms`);
        }
      } catch (err) {
        setApiPing('Offline (Demo Mode)');
      }
    };
    fetchHealth();
    const interval = setInterval(fetchHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <div className="brand-icon">
            <Zap size={22} className="brand-zap" />
          </div>
          <div className="brand-text">
            <span className="brand-name">HyperFetch</span>
            <span className="brand-tag">ENGINE</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-nav">
          <a href="#sandbox" className="nav-link">Live Sandbox</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#code-sdk" className="nav-link">Code SDK</a>
          <a href="#faq" className="nav-link">Ethics & ToS</a>
        </nav>

        {/* Right Action Controls */}
        <div className="navbar-actions">
          {/* Server Ping Indicator */}
          <div className="status-pill" title="Live Express API backend health status">
            <span className="pulse-dot"></span>
            <span className="status-text">API: {apiPing || 'Connecting...'}</span>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle color theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Primary CTA */}
          <a href="#sandbox" className="btn btn-primary btn-sm nav-cta">
            Launch Sandbox
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#sandbox" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Live Sandbox</a>
          <a href="#architecture" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
          <a href="#code-sdk" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Code SDK</a>
          <a href="#faq" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Ethics & ToS</a>
          <div className="mobile-drawer-footer">
            <button onClick={toggleTheme} className="btn btn-secondary btn-full">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      )}

      {/* Inline Scoped Styles for Navbar */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-scrolled {
          padding: 0.875rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-sm);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--accent-cyan), #0284C7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 0 15px var(--accent-cyan-glow);
        }

        .brand-text {
          display: flex;
          align-items: baseline;
          gap: 0.375rem;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-main);
        }

        .brand-tag {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.4rem;
          background: var(--accent-cyan-glow);
          color: var(--accent-cyan);
          border: 1px solid var(--border-accent);
          border-radius: 4px;
          letter-spacing: 0.08em;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .theme-toggle-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          color: var(--accent-cyan);
          border-color: var(--border-bright);
        }

        .nav-cta {
          padding: 0.5rem 1.125rem;
          font-size: 0.875rem;
        }

        .mobile-menu-btn {
          display: none;
          color: var(--text-main);
        }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 900px) {
          .navbar-nav {
            display: none;
          }
          .status-pill {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-drawer {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-surface);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.5rem;
            gap: 1.25rem;
            box-shadow: var(--shadow-md);
          }

          .mobile-link {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--text-main);
          }

          .btn-full {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}
