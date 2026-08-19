import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const FAQS = [
    {
      q: 'How does HyperFetch account for anti-bot detection surfaces (JA3, Canvas, TLS)?',
      a: 'HyperFetch intercepts outgoing client handshakes to align JA3 hashes, HTTP/2 frame parameters, and header order with real Chrome 128 desktop instances. For headless runtime checks, it suppresses navigator.webdriver flags, injects subtle noise into canvas getContextData(), and normalizes WebGL renderer descriptors.'
    },
    {
      q: 'What is your ingestion strategy when a platform starts rate-limiting mid-run?',
      a: 'HyperFetch implements a multi-tier Proxy Cascade. When an IP encounters 429 (Too Many Requests) or 403 signals, the pipeline immediately detaches the blocked proxy node, triggers an exponential backoff jitter delay, and fails over to an isolated residential pool without crashing the main batch runner.'
    },
    {
      q: 'How does the AST DOM Healer prevent silent pipeline failures when markup changes?',
      a: 'Traditional scrapers crash when element IDs change. HyperFetch builds a contextual Abstract Syntax Tree (AST) around expected data attributes. If a selector like #job-card-v1 disappears, the engine computes tree similarity diffs to find the new section.jobs-v2 container automatically with 98%+ confidence.'
    },
    {
      q: 'Where is your personal and technical line regarding platform Terms of Service?',
      a: 'We strictly draw the line at private authenticated user data, personal identifiable information (PII), and circumvention of paywalls. HyperFetch is designed exclusively for public structure data ingestion. We respect robots.txt crawl delays and enforce automated rate limit caps to prevent target server degradation.'
    }
  ];

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} /> Systems Thinking & Ethics
          </div>
          <h2 className="section-title">
            Engineering Decisions & Ethics
          </h2>
          <p className="section-subtitle">
            Honest answers regarding anti-detection design, pipeline resilience, and ToS boundaries.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.q}</h3>
                  <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'rotated' : ''}`} />
                </div>
                {isOpen && (
                  <div className="faq-answer-row">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          background: var(--bg-base);
        }

        .faq-list {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .faq-card:hover {
          border-color: var(--border-bright);
        }

        .faq-card.open {
          border-color: var(--accent-cyan);
          background: var(--bg-surface-hover);
        }

        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .faq-question {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .faq-arrow {
          color: var(--text-dim);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .faq-arrow.rotated {
          transform: rotate(180deg);
          color: var(--accent-cyan);
        }

        .faq-answer-row {
          margin-top: 0.875rem;
          padding-top: 0.875rem;
          border-top: 1px dashed var(--border-subtle);
        }

        .faq-answer {
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
