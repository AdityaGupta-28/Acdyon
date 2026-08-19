import React, { useState, useEffect } from 'react';
import { Terminal, X, ShieldAlert, Cpu, Award, Copy, Check } from 'lucide-react';

export function EasterEggModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calcFps = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      if (isOpen) animId = requestAnimationFrame(calcFps);
    };

    if (isOpen) {
      animId = requestAnimationFrame(calcFps);
    }
    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  if (!isOpen) return null;

  const secretCode = 'ACDYON_EASTER_EGG_UNLOCKED_2026';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(secretCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="easter-modal-overlay" onClick={onClose}>
      <div className="easter-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="easter-modal-header">
          <div className="easter-title">
            <Terminal size={18} className="text-cyan" />
            <span>ACDYON ENGINEERING DEV HUD</span>
          </div>
          <button onClick={onClose} className="easter-close-btn">
            <X size={18} />
          </button>
        </div>

        <div className="easter-modal-body">
          <div className="easter-badge">
            <Award size={14} /> BONUS ROUND UNLOCKED: KONAMI CODE DETECTED
          </div>

          <h3 className="easter-headline">
            Welcome to the Secret Engineering Portal
          </h3>

          <p className="easter-text">
            You found the hidden Easter Egg! As requested by Acdyon Engineering: <em>"Costs zero grading points if skipped. Costs zero grading points if found. We just like finding them."</em>
          </p>

          {/* Real Live Performance Diagnostics */}
          <div className="diagnostics-grid">
            <div className="diag-box">
              <span className="diag-label">Render FPS</span>
              <strong className="diag-val text-emerald">{fps} FPS</strong>
            </div>
            <div className="diag-box">
              <span className="diag-label">DOM Nodes</span>
              <strong className="diag-val text-cyan">{document.getElementsByTagName('*').length}</strong>
            </div>
            <div className="diag-box">
              <span className="diag-label">Theme Mode</span>
              <strong className="diag-val">{document.documentElement.getAttribute('data-theme')?.toUpperCase()}</strong>
            </div>
            <div className="diag-box">
              <span className="diag-label">Built By</span>
              <strong className="diag-val text-violet">MERN Specialist</strong>
            </div>
          </div>

          <div className="secret-code-box">
            <div className="secret-label">Secret Verification Code:</div>
            <div className="secret-row">
              <code className="secret-code">{secretCode}</code>
              <button onClick={handleCopyCode} className="btn-copy-secret">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        <div className="easter-modal-footer">
          <button onClick={onClose} className="btn btn-primary btn-full">
            Return to HyperFetch Home
          </button>
        </div>
      </div>

      <style>{`
        .easter-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .easter-modal-card {
          background: var(--code-bg);
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-lg);
          max-width: 540px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 0 40px var(--accent-cyan-glow);
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        .easter-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
        }

        .easter-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .easter-close-btn {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .easter-close-btn:hover {
          color: var(--text-main);
        }

        .easter-modal-body {
          padding: 1.5rem;
        }

        .easter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.35rem 0.75rem;
          background: var(--accent-emerald-glow);
          color: var(--accent-emerald);
          border: 1px solid var(--accent-emerald);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
          margin-bottom: 1rem;
        }

        .easter-headline {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .easter-text {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .diagnostics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .diag-box {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .diag-label {
          font-size: 0.725rem;
          color: var(--text-dim);
          text-transform: uppercase;
          font-family: var(--font-mono);
        }

        .diag-val {
          font-size: 0.95rem;
          font-family: var(--font-mono);
        }

        .text-violet { color: var(--accent-violet); }

        .secret-code-box {
          background: var(--bg-base);
          border: 1px dashed var(--accent-cyan);
          border-radius: var(--radius-md);
          padding: 0.875rem 1rem;
        }

        .secret-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 0.375rem;
        }

        .secret-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .secret-code {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .btn-copy-secret {
          color: var(--text-muted);
        }

        .btn-copy-secret:hover {
          color: var(--accent-cyan);
        }

        .easter-modal-footer {
          padding: 1rem 1.5rem;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
        }
      `}</style>
    </div>
  );
}
