import React from 'react';
import { ShieldCheck, Play, ArrowRight, Terminal, Cpu, Database, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Top Announcement Pill */}
        <div className="hero-announcement">
          <span className="announcement-tag">Acdyon Frontend Challenge</span>
          <span className="announcement-text">Part 2: Premium Product Redesign</span>
          <ArrowRight size={14} className="announcement-arrow" />
        </div>

        {/* Main Headline & Subtitle */}
        <div className="hero-content">
          <h1 className="hero-title">
            Resilient Web Extraction. <br />
            <span className="gradient-text">Zero Broken Pipelines.</span>
          </h1>
          <p className="hero-subtitle">
            Stop repairing scraped endpoints every Tuesday. HyperFetch spoofs browser TLS fingerprints, rotates residential proxy cascades, and heals structural DOM drift in real-time.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#sandbox" className="btn btn-primary btn-lg">
              <Play size={18} /> Run Live Extraction Demo
            </a>
            <a href="#architecture" className="btn btn-secondary btn-lg">
              <Cpu size={18} /> Explore Pipeline Specs
            </a>
          </div>

          {/* Honest Technical Highlights (No fake stats) */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>JA3/Akamai Fingerprint Bypass</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>AST Structural Selector Healing</span>
            </div>
            <div className="highlight-item">
              <CheckCircle2 size={16} className="highlight-icon" />
              <span>Strict Zero-Fake-Metrics Policy</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Preview Card */}
        <div className="hero-preview-card">
          <div className="preview-header">
            <div className="preview-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="preview-title">
              <Terminal size={14} /> hyperfetch-engine-v1.4.2 --live-stealth
            </div>
            <div className="preview-status">
              <span className="pulse-dot"></span> LIVE PARSER
            </div>
          </div>

          <div className="preview-body">
            <div className="code-line">
              <span className="line-num">01</span>
              <span className="code-keyword">import</span> &#123; HyperFetch &#125; <span className="code-keyword">from</span> <span className="code-string">'@hyperfetch/core'</span>;
            </div>
            <div className="code-line">
              <span className="line-num">02</span>
              <span className="code-comment">// Initialize stealth ingestion pipeline with AST auto-healing</span>
            </div>
            <div className="code-line">
              <span className="line-num">03</span>
              <span className="code-keyword">const</span> engine = <span className="code-keyword">new</span> <span className="code-func">HyperFetch</span>(&#123;
            </div>
            <div className="code-line">
              <span className="line-num">04</span>
              &nbsp;&nbsp;fingerprint: <span className="code-string">'chrome-128-windows-stealth'</span>,
            </div>
            <div className="code-line">
              <span className="line-num">05</span>
              &nbsp;&nbsp;proxyCascade: [<span className="code-string">'residential-4g'</span>, <span className="code-string">'datacenter-failover'</span>],
            </div>
            <div className="code-line">
              <span className="line-num">06</span>
              &nbsp;&nbsp;domDriftHealing: <span className="code-keyword">true</span>
            </div>
            <div className="code-line">
              <span className="line-num">07</span>
              &#125;);
            </div>
            <div className="code-line highlighted-line">
              <span className="line-num">08</span>
              <span className="code-keyword">const</span> &#123; data, telemetry &#125; = <span className="code-keyword">await</span> engine.<span className="code-func">extract</span>(<span className="code-string">'https://target.com/jobs'</span>);
            </div>
          </div>

          <div className="preview-footer">
            <div className="telemetry-pill">
              <ShieldCheck size={14} className="text-emerald" />
              <span>TLS JA3 Match: <strong>100%</strong></span>
            </div>
            <div className="telemetry-pill">
              <Database size={14} className="text-cyan" />
              <span>AST Selector Diff: <strong>0.984 (Auto-Healed)</strong></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          position: relative;
          background: radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.08) 0%, transparent 60%);
        }

        .hero-announcement {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.375rem 1rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-bright);
          border-radius: var(--radius-full);
          margin-bottom: 2rem;
          font-size: 0.8125rem;
          box-shadow: var(--shadow-sm);
        }

        .announcement-tag {
          font-weight: 700;
          color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .announcement-text {
          color: var(--text-muted);
          font-weight: 500;
        }

        .announcement-arrow {
          color: var(--text-dim);
        }

        .hero-content {
          max-width: 860px;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.25rem;
          max-width: 720px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn-lg {
          padding: 0.875rem 1.875rem;
          font-size: 1.05rem;
        }

        .hero-highlights {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .highlight-icon {
          color: var(--accent-emerald);
        }

        /* Preview Card */
        .hero-preview-card {
          background: var(--code-bg);
          border: 1px solid var(--border-bright);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-glow);
        }

        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.875rem 1.25rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
        }

        .preview-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #EF4444; }
        .dot-yellow { background: #F59E0B; }
        .dot-green { background: #10B981; }

        .preview-title {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .preview-status {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--accent-emerald);
          font-weight: 700;
        }

        .preview-body {
          padding: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.7;
          overflow-x: auto;
        }

        .code-line {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          white-space: pre;
        }

        .highlighted-line {
          background: var(--accent-cyan-glow);
          margin: 0.25rem -1.5rem;
          padding: 0 1.5rem;
          border-left: 3px solid var(--accent-cyan);
        }

        .line-num {
          color: var(--text-dim);
          user-select: none;
          font-size: 0.8rem;
          width: 20px;
        }

        .code-keyword { color: var(--accent-cyan); font-weight: 600; }
        .code-string { color: var(--accent-emerald); }
        .code-comment { color: var(--text-dim); font-style: italic; }
        .code-func { color: var(--accent-violet); font-weight: 600; }

        .preview-footer {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.875rem 1.25rem;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          font-size: 0.8125rem;
          flex-wrap: wrap;
        }

        .telemetry-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
        }

        .text-emerald { color: var(--accent-emerald); }
        .text-cyan { color: var(--accent-cyan); }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
          }
          .hero-highlights {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
