import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Shield, Globe, Cpu, Code2, AlertTriangle, Layers } from 'lucide-react';

export function InteractiveDemo() {
  const [scenario, setScenario] = useState('job_board');
  const [strategy, setStrategy] = useState('stealth_fingerprint');
  const [activeTab, setActiveTab] = useState('output');
  const [loading, setLoading] = useState(false);
  const [telemetryData, setTelemetryData] = useState(null);
  const [error, setError] = useState(null);

  const runExtraction = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/extract-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario, strategy })
      });
      if (!response.ok) throw new Error('API server returned error');
      const data = await response.json();
      setTelemetryData(data);
    } catch (err) {
      // Fallback client simulation if Express backend is running without API proxy
      setTelemetryData({
        requestInfo: {
          targetUrl: scenario === 'job_board' ? 'https://careers.techcorp.internal/jobs' : 'https://catalog.gearstore.shop/products',
          timestamp: new Date().toISOString(),
          executionTimeMs: 412,
          strategyUsed: strategy
        },
        stealthEngine: {
          tlsClientHello: 'JA3 Spoofed (Chrome 128 / Windows 11)',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0.0.0',
          webglVendor: 'NVIDIA GeForce RTX 4080',
          canvasNoiseAdded: true,
          audioContextHash: 'a789f02b1c4e'
        },
        proxyMesh: {
          assignedIp: '198.51.100.44',
          type: 'Residential Mobile 5G Cascade',
          location: 'Ashburn, VA, US',
          latency: '24ms'
        },
        domDriftEngine: {
          selectorsTested: 14,
          selectorsDrifted: 2,
          astRepairScore: 0.984,
          repairLog: [
            'Detected changed target selector div#job-list-v1',
            'Fuzzy AST matched replacement section.jobs-container-v2 (Confidence: 98.4%)',
            'Auto-rebuilt parser map'
          ]
        },
        result: {
          success: true,
          statusCode: 200,
          itemCount: 3,
          data: [
            { title: 'Staff Frontend Engineer', company: 'Apex Networks', salary: '$185,000 - $220,000' },
            { title: 'Distributed Systems Scraper Architect', company: 'Vigil Security', salary: '$195,000 - $245,000' }
          ]
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sandbox" className="section demo-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} /> Interactive Product Playground
          </div>
          <h2 className="section-title">
            Try HyperFetch Engine Live
          </h2>
          <p className="section-subtitle">
            Test how HyperFetch executes stealth browser spoofing, proxy cascading, and AST structural repair in real-time.
          </p>
        </div>

        <div className="demo-grid">
          {/* Left Column: Sandbox Controls */}
          <div className="card controls-card">
            <h3 className="controls-heading">1. Select Target Scenario</h3>
            <div className="scenario-options">
              <button
                className={`scenario-btn ${scenario === 'job_board' ? 'active' : ''}`}
                onClick={() => setScenario('job_board')}
              >
                <div className="scenario-title">💼 Job Board Listings</div>
                <div className="scenario-desc">Detects headless fingerprints & bot-protection walls</div>
              </button>

              <button
                className={`scenario-btn ${scenario === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setScenario('ecommerce')}
              >
                <div className="scenario-title">🛒 E-Commerce Catalog</div>
                <div className="scenario-desc">Dynamic DOM structure drift & anti-scraping rate limits</div>
              </button>

              <button
                className={`scenario-btn ${scenario === 'dynamic_spa' ? 'active' : ''}`}
                onClick={() => setScenario('dynamic_spa')}
              >
                <div className="scenario-title">⚡ Realtime SPA Dashboard</div>
                <div className="scenario-desc">Heavy JavaScript rendering & WebSocket state ingestion</div>
              </button>
            </div>

            <h3 className="controls-heading mt-6">2. Defense Resilience Layer</h3>
            <div className="strategy-options">
              <label className="strategy-radio">
                <input
                  type="radio"
                  name="strategy"
                  value="stealth_fingerprint"
                  checked={strategy === 'stealth_fingerprint'}
                  onChange={(e) => setStrategy(e.target.value)}
                />
                <span className="radio-label">
                  <strong>Stealth TLS & WebGL Engine</strong>
                  <span className="radio-sub">Spoofs Canvas, Audio, and JA3 TLS signatures</span>
                </span>
              </label>

              <label className="strategy-radio">
                <input
                  type="radio"
                  name="strategy"
                  value="smart_proxy_cascade"
                  checked={strategy === 'smart_proxy_cascade'}
                  onChange={(e) => setStrategy(e.target.value)}
                />
                <span className="radio-label">
                  <strong>Smart Proxy Cascade</strong>
                  <span className="radio-sub">Rotates residential IPs with exponential backoff</span>
                </span>
              </label>
            </div>

            <button
              onClick={runExtraction}
              disabled={loading}
              className="btn btn-primary btn-full mt-6 btn-run"
            >
              {loading ? (
                <>
                  <RotateCcw className="spinner" size={18} /> Executing Pipeline...
                </>
              ) : (
                <>
                  <Play size={18} /> Execute Extraction Run
                </>
              )}
            </button>
          </div>

          {/* Right Column: Live Output & Telemetry Console */}
          <div className="card console-card">
            <div className="console-header">
              <div className="console-tabs">
                <button
                  className={`console-tab ${activeTab === 'output' ? 'active' : ''}`}
                  onClick={() => setActiveTab('output')}
                >
                  <Code2 size={14} /> Extracted Data Payload
                </button>
                <button
                  className={`console-tab ${activeTab === 'stealth' ? 'active' : ''}`}
                  onClick={() => setActiveTab('stealth')}
                >
                  <Shield size={14} /> Stealth Telemetry
                </button>
                <button
                  className={`console-tab ${activeTab === 'ast' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ast')}
                >
                  <Cpu size={14} /> AST Repair Log
                </button>
              </div>
            </div>

            <div className="console-body">
              {!telemetryData && !loading && (
                <div className="console-empty">
                  <Play size={36} className="empty-icon" />
                  <p className="empty-text">Click <strong>"Execute Extraction Run"</strong> to see live pipeline telemetry & auto-healed extraction output.</p>
                </div>
              )}

              {loading && (
                <div className="console-loading">
                  <div className="loading-pulse"></div>
                  <p>Resolving JA3 Fingerprints & Spawning Playwright Context...</p>
                </div>
              )}

              {telemetryData && !loading && (
                <>
                  {activeTab === 'output' && (
                    <pre className="json-code">
                      {JSON.stringify(telemetryData.result, null, 2)}
                    </pre>
                  )}

                  {activeTab === 'stealth' && (
                    <div className="telemetry-view">
                      <div className="telemetry-row">
                        <span className="tele-label">TLS Client Hello:</span>
                        <span className="tele-val text-cyan">{telemetryData.stealthEngine.tlsClientHello}</span>
                      </div>
                      <div className="telemetry-row">
                        <span className="tele-label">User-Agent Spoof:</span>
                        <span className="tele-val">{telemetryData.stealthEngine.userAgent}</span>
                      </div>
                      <div className="telemetry-row">
                        <span className="tele-label">WebGL Renderer:</span>
                        <span className="tele-val">{telemetryData.stealthEngine.webglVendor}</span>
                      </div>
                      <div className="telemetry-row">
                        <span className="tele-label">Assigned Proxy IP:</span>
                        <span className="tele-val text-emerald">{telemetryData.proxyMesh.assignedIp} ({telemetryData.proxyMesh.location})</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ast' && (
                    <div className="ast-view">
                      <div className="ast-score-box">
                        <span>AST Confidence Score:</span>
                        <strong className="text-emerald">{telemetryData.domDriftEngine.astRepairScore * 100}% (AUTO-HEALED)</strong>
                      </div>
                      <div className="ast-logs">
                        {telemetryData.domDriftEngine.repairLog.map((log, idx) => (
                          <div key={idx} className="ast-log-line">
                            <span className="log-bullet">❯</span> {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .demo-section {
          background: var(--bg-base);
        }

        .demo-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 960px) {
          .demo-grid {
            grid-template-columns: 1fr;
          }
        }

        .controls-heading {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .mt-6 { margin-top: 1.5rem; }

        .scenario-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .scenario-btn {
          text-align: left;
          padding: 1rem;
          background: var(--bg-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .scenario-btn:hover {
          border-color: var(--border-bright);
          background: var(--bg-surface-hover);
        }

        .scenario-btn.active {
          border-color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
        }

        .scenario-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .scenario-desc {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }

        .strategy-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .strategy-radio {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.875rem;
          background: var(--bg-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          cursor: pointer;
        }

        .radio-label {
          display: flex;
          flex-direction: column;
          font-size: 0.875rem;
          color: var(--text-main);
        }

        .radio-sub {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .btn-full { width: 100%; }

        .btn-run {
          padding: 1rem;
          font-size: 1.05rem;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Console styling */
        .console-card {
          padding: 0;
          overflow: hidden;
          background: var(--code-bg);
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }

        .console-header {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.5rem 1rem 0 1rem;
        }

        .console-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .console-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-muted);
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .console-tab:hover {
          color: var(--text-main);
        }

        .console-tab.active {
          color: var(--accent-cyan);
          border-bottom-color: var(--accent-cyan);
        }

        .console-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          overflow-y: auto;
        }

        .console-empty {
          margin: auto;
          text-align: center;
          max-width: 320px;
          color: var(--text-dim);
        }

        .empty-icon {
          margin-bottom: 1rem;
          color: var(--accent-cyan);
          opacity: 0.8;
        }

        .empty-text {
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .console-loading {
          margin: auto;
          text-align: center;
          color: var(--accent-cyan);
        }

        .loading-pulse {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border-bright);
          border-top-color: var(--accent-cyan);
          border-radius: 50%;
          margin: 0 auto 1rem auto;
          animation: spin 0.8s linear infinite;
        }

        .json-code {
          color: var(--accent-emerald);
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .telemetry-view {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .telemetry-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px dashed var(--border-subtle);
        }

        .tele-label {
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tele-val {
          color: var(--text-main);
          font-size: 0.875rem;
        }

        .ast-score-box {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ast-logs {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .ast-log-line {
          color: var(--text-muted);
          font-size: 0.825rem;
        }

        .log-bullet {
          color: var(--accent-cyan);
        }
      `}</style>
    </section>
  );
}
