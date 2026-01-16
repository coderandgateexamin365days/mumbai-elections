# Mumbai Corporators Website 🇮🇳

A fast, static website that provides an **exact replica** of the official data from `mycorporator.in`.

Designed for:
*   **Exact Copy**: Matches the official layout with Saffron theme and Data Tables.
*   **Reliability**: 100% Uptime via Cloudflare.
*   **Monetization**: Built-in AdSense slots in the sidebar and content.

## ✨ Features
*   **Exact Data Table**: View all 227 corporators in a clean, official list format.
*   **Saffron Theme**: Matches the official BMC election color palette.
*   **Sidebar Layout**: Optimized for high ad revenue with dedicated widget slots.
*   **Search Engine**: Instantly filter by Ward Number, Name, or Party.
*   **Static Export**: Ultra-fast loading and can be hosted for free on Cloudflare Pages.

## 🚀 How to Deploy (Correct Method)

1.  **Push Code to GitHub**:
    *   This code is already configured. Just push it.
2.  **Connect to Cloudflare Pages**:
    *   Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
    *   Go to **Workers & Pages** > **Create Application** > **Pages**.
    *   Connect your `mumbai-elections` repo.
3.  **Critical Settings**:
    *   **Framework Preset**: `Next.js (Static Export)`
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `out`

## 💰 Monetization (Google AdSense)
1.  Sign up for AdSense.
2.  Paste your script into `src/app/layout.js`.
3.  Cloudflare updates automatically.

## 📝 How to Update for 2026 Results
1.  Get the list of winners.
2.  Format it as JSON.
3.  Paste it into `src/data/wards.json`.
4.  Push to GitHub.
