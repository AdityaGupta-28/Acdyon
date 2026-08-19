import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock datasets for realistic extraction feedback
const MOCK_DATASETS = {
  job_board: {
    targetUrl: 'https://careers.techcorp.internal/jobs',
    source: 'TechCorp Careers (Sandbox Target)',
    itemsExtracted: 3,
    sampleListings: [
      {
        id: 'job-101',
        title: 'Staff Frontend Engineer - Design Systems',
        company: 'Apex Networks',
        location: 'Remote (US/EU)',
        salary: '$185,000 - $220,000',
        tags: ['React', 'CSS Architecture', 'TypeScript', 'Web Workers'],
        posted: '2 hours ago',
        antiBotPassed: true
      },
      {
        id: 'job-102',
        title: 'Distributed Systems Scraper Architect',
        company: 'Vigil Security',
        location: 'New York, NY (Hybrid)',
        salary: '$195,000 - $245,000',
        tags: ['Go', 'Playwright', 'TLS Fingerprinting', 'Node.js'],
        posted: '5 hours ago',
        antiBotPassed: true
      },
      {
        id: 'job-103',
        title: 'Principal Data Ingestion Lead',
        company: 'Quantum Insights',
        location: 'San Francisco, CA',
        salary: '$210,000 - $260,000',
        tags: ['Rust', 'Proxy Mesh', 'Browser Engines'],
        posted: '1 day ago',
        antiBotPassed: true
      }
    ]
  },
  ecommerce: {
    targetUrl: 'https://catalog.gearstore.shop/products',
    source: 'GearStore Catalog (Sandbox Target)',
    itemsExtracted: 4,
    sampleListings: [
      {
        id: 'prod-401',
        title: 'Ergonomic Developer Desk Lamp - OLED',
        price: '$149.00',
        stock: 'In Stock (14 units)',
        sku: 'SKU-LAMP-909',
        rating: 4.9,
        antiBotPassed: true
      },
      {
        id: 'prod-402',
        title: 'Mechanical Keypad 75% Hotswap Gasket',
        price: '$189.50',
        stock: 'In Stock (5 units)',
        sku: 'SKU-KEY-772',
        rating: 4.8,
        antiBotPassed: true
      }
    ]
  },
  dynamic_spa: {
    targetUrl: 'https://app.metrics-pulse.io/dashboard',
    source: 'MetricsPulse Realtime Dashboard',
    itemsExtracted: 2,
    sampleListings: [
      {
        id: 'metric-01',
        name: 'API Route P99 Latency',
        value: '38.4ms',
        status: 'Optimal',
        healedSelector: 'div[data-testid="p99-chart"] -> auto-healed to .chart-metric-p99'
      },
      {
        id: 'metric-02',
        name: 'Anti-Bot Block Ratio',
        value: '0.002%',
        status: 'Protected',
        healedSelector: 'span.badge-alert -> auto-healed to #status-badge-v2'
      }
    ]
  }
};

// Healthcheck endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    version: '1.4.2-acd',
    engine: 'HyperFetch Core Node',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    region: 'us-east-1 (edge)'
  });
});

// Live extraction sandbox simulation endpoint
app.post('/api/extract-demo', async (req, res) => {
  const { scenario = 'job_board', strategy = 'stealth_fingerprint', targetUrlOverride } = req.body;
  
  // Simulate network delay and fingerprint calculation (350 - 650 ms)
  const simulatedDelay = Math.floor(Math.random() * 250) + 320;
  await new Promise((resolve) => setTimeout(resolve, simulatedDelay));

  const dataset = MOCK_DATASETS[scenario] || MOCK_DATASETS.job_board;
  const targetUrl = targetUrlOverride || dataset.targetUrl;

  const telemetry = {
    requestInfo: {
      targetUrl,
      timestamp: new Date().toISOString(),
      executionTimeMs: simulatedDelay,
      strategyUsed: strategy
    },
    stealthEngine: {
      tlsClientHello: 'JA3 Spoofed (Chrome 128 / Windows 11)',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      webglVendor: 'Google Inc. (NVIDIA GeForce RTX 4080 Direct3D11 vs_5_0 ps_5_0)',
      canvasNoiseAdded: true,
      audioContextHash: 'a789f02b1c4e',
      secChUa: '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"'
    },
    proxyMesh: {
      assignedIp: `198.51.${Math.floor(Math.random() * 200) + 10}.${Math.floor(Math.random() * 250) + 1}`,
      type: 'Residential Mobile 4G/5G Cascade',
      location: 'Ashburn, VA, United States',
      latency: `${Math.floor(Math.random() * 15) + 18}ms`
    },
    domDriftEngine: {
      selectorsTested: 14,
      selectorsDrifted: 2,
      astRepairScore: 0.982,
      repairLog: [
        'Detected missing wrapper: div#job-list-v1',
        'Fuzzy AST matched replacement: section.jobs-container-v2 (Confidence: 98.4%)',
        'Auto-updated selector map dynamically'
      ]
    },
    result: {
      success: true,
      statusCode: 200,
      itemCount: dataset.itemsExtracted,
      data: dataset.sampleListings
    }
  };

  res.json(telemetry);
});

const server = app.listen(PORT, () => {
  console.log(`[HyperFetch Server] Running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`[HyperFetch Server Error] Port ${PORT} is already in use by another process.`);
    console.error(`To fix: kill any existing Node process running on port ${PORT} or set PORT environment variable.`);
  } else {
    console.error('[HyperFetch Server Error]', err);
  }
});

