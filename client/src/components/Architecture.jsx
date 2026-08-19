import React, { useState } from 'react';
import { ShieldAlert, Globe2, Bot, GitMerge, Check, ArrowRight } from 'lucide-react';

export function Architecture() {
  const [selectedStage, setSelectedStage] = useState(0);

  const STAGES = [
    {
      id: 'sanitizer',
      step: 'STAGE 01',
      title: 'Request TLS Sanitizer',
      icon: ShieldAlert,
      summary: 'Spoofs JA3 fingerprints, HTTP/2 frame settings, and header order before network emission.',
      details: [
        'Overwrites default Node/Python TLS cipher suits with authentic Chrome 128 Client Hello.',
        'Normalizes sec-ch-ua, Accept-Language, and Connection header ordering.',
        'Prevents Cloudflare / Akamai TLS fingerprint flagging.'
      ],
      codeSnippet: `// TLS Sanitizer Hook
const client = new TLSClient({
  ja3: "771,4865-4866-4867-49195-49199,0-23-65281-10-11,29-23-24,0",
  h2Settings: { HEADER_TABLE_SIZE: 65536, MAX_CONCURRENT_STREAMS: 1000 }
});`
    },
    {
      id: 'proxy',
      step: 'STAGE 02',
      title: 'Smart Proxy Cascade',
      icon: Globe2,
      summary: 'Routes requests through residential 4G/5G nodes with automatic session sticky routing.',
      details: [
        'Instant fallback from residential to datacenter nodes on 429 / 403 block signals.',
        'Exponential jitter delay calculation to mimic organic human browsing pacing.',
        'Automatic geographic IP affinity matching target site locale.'
      ],
      codeSnippet: `// Proxy Cascade Router
const proxy = await proxyMesh.getOptimalNode({
  targetHost: "linkedin.com",
  preferredGeo: "US-EAST",
  maxCostPerMb: 0.02
});`
    },
    {
      id: 'runtime',
      step: 'STAGE 03',
      title: 'Stealth Browser Runtime',
      icon: Bot,
      summary: 'Headless Chromium execution patched against navigator.webdriver and WebGL detection.',
      details: [
        'Injects subtle noise into HTML5 Canvas and AudioContext getChannelData().',
        'Overwrites navigator.languages, permissions, and plugin arrays.',
        'Suppresses CDP (Chrome DevTools Protocol) detection hooks.'
      ],
      codeSnippet: `// Stealth Playwright Context
const context = await browser.newContext({
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0.0.0",
  viewport: { width: 1920, height: 1080 },
  permissions: ['geolocation']
});`
    },
    {
      id: 'healer',
      step: 'STAGE 04',
      title: 'AST Structural DOM Healer',
      icon: GitMerge,
      summary: 'Self-healing parser that recovers extracted data when site markup changes overnight.',
      details: [
        'Constructs an Abstract Syntax Tree (AST) of candidate target elements.',
        'Uses Levenshtein & Tree Similarity metrics to locate moved data nodes.',
        'Emits dynamic patch events to keep extraction schemas valid without human intervention.'
      ],
      codeSnippet: `// AST Healing Engine
const healer = new ASTHealer({ selector: "div.job-card-v1" });
const healedNode = await healer.findClosestMatch(domTree, {
  expectedChildren: ['h3.title', 'span.salary'],
  confidenceThreshold: 0.85
});`
    }
  ];

  return (
    <section id="architecture" className="section arch-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GitMerge size={14} /> Pipeline Resilience Architecture
          </div>
          <h2 className="section-title">
            Engineered for Continuous Ingestion
          </h2>
          <p className="section-subtitle">
            How HyperFetch handles bot-detection countermeasures, IP rotation, and structural markup changes end-to-end.
          </p>
        </div>

        {/* 4 Stage Pipeline Selector Cards */}
        <div className="arch-pipeline">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = selectedStage === idx;
            return (
              <div
                key={stage.id}
                className={`arch-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedStage(idx)}
              >
                <div className="arch-step">{stage.step}</div>
                <div className="arch-card-header">
                  <div className="arch-icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <h3 className="arch-card-title">{stage.title}</h3>
                </div>
                <p className="arch-card-desc">{stage.summary}</p>
                <div className="arch-card-action">
                  <span>Inspect Tech Specs</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Spec View for Selected Stage */}
        <div className="card arch-detail-card mt-8">
          <div className="detail-header">
            <div className="detail-title-group">
              <span className="detail-badge">{STAGES[selectedStage].step} DEEP DIVE</span>
              <h3 className="detail-title">{STAGES[selectedStage].title}</h3>
            </div>
          </div>

          <div className="detail-content-grid">
            <div className="detail-points">
              <h4 className="points-heading">Engineering Guarantees:</h4>
              <ul className="points-list">
                {STAGES[selectedStage].details.map((point, i) => (
                  <li key={i} className="point-item">
                    <Check size={16} className="text-cyan point-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-code">
              <div className="code-label">Implementation Reference</div>
              <pre className="code-block">{STAGES[selectedStage].codeSnippet}</pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .arch-section {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .arch-pipeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 1024px) {
          .arch-pipeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .arch-pipeline {
            grid-template-columns: 1fr;
          }
        }

        .arch-card {
          background: var(--bg-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .arch-card:hover {
          border-color: var(--border-bright);
          transform: translateY(-3px);
        }

        .arch-card.selected {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px var(--accent-cyan-glow);
          background: var(--bg-surface-hover);
        }

        .arch-step {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          margin-bottom: 0.875rem;
        }

        .arch-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .arch-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--accent-cyan-glow);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arch-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.3;
        }

        .arch-card-desc {
          font-size: 0.825rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .arch-card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-top: auto;
        }

        .arch-detail-card {
          background: var(--bg-base);
          border: 1px solid var(--border-bright);
        }

        .detail-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .detail-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-emerald);
          letter-spacing: 0.08em;
        }

        .detail-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-top: 0.25rem;
        }

        .detail-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 800px) {
          .detail-content-grid {
            grid-template-columns: 1fr;
          }
        }

        .points-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .point-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .detail-code {
          background: var(--code-bg);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }

        .code-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .code-block {
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: var(--accent-cyan);
          line-height: 1.6;
          white-space: pre-wrap;
        }
      `}</style>
    </section>
  );
}
