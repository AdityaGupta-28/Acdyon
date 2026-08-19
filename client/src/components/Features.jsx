import React from 'react';
import { Shield, RefreshCw, Cpu, Zap, Lock, Database } from 'lucide-react';

export function Features() {
  const FEATURES = [
    {
      icon: Shield,
      title: 'TLS & JA3 Fingerprint Spoofing',
      description: 'Overwrites native runtime TLS signatures with authentic Chrome 128 Client Hello parameters to bypass Cloudflare and Akamai bot protection.'
    },
    {
      icon: RefreshCw,
      title: 'Smart Residential Proxy Mesh',
      description: 'Rotates residential 4G/5G proxies automatically with sticky session preservation and geo-affinity controls.'
    },
    {
      icon: Cpu,
      title: 'AST Structural DOM Healing',
      description: 'Uses abstract syntax tree matching to automatically repair broken CSS selectors when target websites update their HTML markup overnight.'
    },
    {
      icon: Zap,
      title: 'Adaptive Backoff Pacing',
      description: 'Monitors HTTP 429 and 503 response headers to dynamically adjust request frequency and prevent IP burning.'
    },
    {
      icon: Lock,
      title: 'Canvas & WebGL Fingerprint Shield',
      description: 'Masks navigator.webdriver, injects uniform noise into canvas getContextData(), and normalizes WebGL vendor strings.'
    },
    {
      icon: Database,
      title: 'TypeScript & Zod Schema Enforcement',
      description: 'Guarantees strongly typed JSON payload structures with automatic validation and fallback fields.'
    }
  ];

  return (
    <section className="section features-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Shield size={14} /> Core Capabilities
          </div>
          <h2 className="section-title">
            Built for Engineering Reliability
          </h2>
          <p className="section-subtitle">
            Every layer designed to prevent pipeline breakage, bot detection, and manual maintenance overhead.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="card feature-card">
                <div className="feature-icon">
                  <Icon size={22} />
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .features-section {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-card {
          background: var(--bg-base);
          border: 1px solid var(--border-subtle);
          transition: all 0.25s ease;
        }

        .feature-card:hover {
          border-color: var(--border-bright);
          transform: translateY(-2px);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--accent-cyan-glow);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
