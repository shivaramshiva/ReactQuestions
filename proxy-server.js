process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Proxy endpoint for Swiggy API
app.use('/api', async (req, res) => {
  const swiggyUrl = req.originalUrl.replace(/^\/api/, 'https://www.swiggy.com');
  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9',
        'referer': 'https://www.swiggy.com/'
      },
    });
    const data = await response.text();
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
