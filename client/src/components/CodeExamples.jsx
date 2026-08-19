import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';

export function CodeExamples() {
  const [lang, setLang] = useState('node');
  const [copied, setCopied] = useState(false);

  const SNIPPETS = {
    node: `import { HyperFetch } from '@hyperfetch/sdk';

// Initialize HyperFetch Client with Anti-Bot Protection
const client = new HyperFetch({
  apiKey: process.env.HYPERFETCH_KEY,
  stealth: {
    fingerprint: 'chrome-128-windows',
    proxyCascade: 'residential_5g'
  }
});

// Run resilient extraction job
const { data, telemetry } = await client.extract({
  url: 'https://www.linkedin.com/jobs/search?keywords=frontend',
  selectors: {
    jobTitle: 'h3.base-search-card__title',
    company: 'h4.base-search-card__subtitle',
    location: 'span.job-search-card__location'
  },
  autoHealDOM: true
});

console.log(\`Extracted \${data.length} listings in \${telemetry.executionTimeMs}ms\`);`,

    python: `from hyperfetch import HyperFetchEngine, StealthConfig

# Initialize Python Resilient Ingestion Engine
engine = HyperFetchEngine(
    api_key="hf_live_992a01",
    stealth=StealthConfig(
        ja3_spoof=True,
        proxy_rotation="residential_auto"
    )
)

# Extract structured payload with AST DOM drift repair
response = engine.extract(
    target_url="https://www.indeed.com/jobs?q=engineer",
    schema={
        "title": ".jobTitle",
        "company": ".companyName",
        "salary": ".salary-snippet"
    }
)

print(f"Status: {response.status_code} | Healed Selectors: {response.ast_repaired_count}")`,

    curl: `curl -X POST "https://api.hyperfetch.io/v1/extract" \\
  -H "Authorization: Bearer hf_live_992a01" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://careers.techcorp.internal/jobs",
    "stealthLevel": "ultra",
    "proxyCascade": ["residential", "datacenter"],
    "autoHealAST": true
  }'`,

    go: `package main

import (
	"fmt"
	"github.com/hyperfetch/hyperfetch-go"
)

func main() {
	client := hyperfetch.NewClient("hf_live_992a01", hyperfetch.WithStealth())

	result, err := client.Extract(hyperfetch.ExtractOptions{
		URL:         "https://wellfound.com/jobs",
		AutoHealDOM: true,
	})
	if err != nil {
		panic(err)
	}

	fmt.Printf("Ingested %d items with proxy %s\\n", len(result.Items), result.ProxyNode)
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPETS[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-sdk" className="section code-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} /> Developer Integration
          </div>
          <h2 className="section-title">
            Integrate in 5 Lines of Code
          </h2>
          <p className="section-subtitle">
            First-class SDK support for Node.js, Python, Go, and native HTTP REST APIs.
          </p>
        </div>

        <div className="card code-box">
          <div className="code-box-header">
            <div className="lang-tabs">
              <button
                className={`lang-tab ${lang === 'node' ? 'active' : ''}`}
                onClick={() => setLang('node')}
              >
                Node.js / TS
              </button>
              <button
                className={`lang-tab ${lang === 'python' ? 'active' : ''}`}
                onClick={() => setLang('python')}
              >
                Python
              </button>
              <button
                className={`lang-tab ${lang === 'go' ? 'active' : ''}`}
                onClick={() => setLang('go')}
              >
                Go
              </button>
              <button
                className={`lang-tab ${lang === 'curl' ? 'active' : ''}`}
                onClick={() => setLang('curl')}
              >
                cURL API
              </button>
            </div>

            <button onClick={handleCopy} className="btn-copy" title="Copy code snippet">
              {copied ? (
                <>
                  <Check size={14} className="text-emerald" /> Copied!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Snippet
                </>
              )}
            </button>
          </div>

          <div className="code-box-body">
            <pre className="code-content">{SNIPPETS[lang]}</pre>
          </div>
        </div>
      </div>

      <style>{`
        .code-section {
          background: var(--bg-base);
        }

        .code-box {
          padding: 0;
          overflow: hidden;
          background: var(--code-bg);
          border: 1px solid var(--border-bright);
        }

        .code-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .lang-tabs {
          display: flex;
          gap: 0.25rem;
        }

        .lang-tab {
          padding: 0.625rem 1rem;
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .lang-tab:hover {
          color: var(--text-main);
          background: var(--bg-surface-hover);
        }

        .lang-tab.active {
          color: var(--accent-cyan);
          background: var(--accent-cyan-glow);
        }

        .btn-copy {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--bg-base);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .btn-copy:hover {
          color: var(--text-main);
          border-color: var(--border-bright);
        }

        .code-box-body {
          padding: 1.5rem;
          overflow-x: auto;
        }

        .code-content {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-main);
          white-space: pre;
        }
      `}</style>
    </section>
  );
}
