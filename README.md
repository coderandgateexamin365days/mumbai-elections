# Mumbai Corporators Website

A Next.js website dedicated to displaying Brihanmumbai Municipal Corporation (BMC) election results, ward details, and corporator information. This project is optimized for performance, SEO, and includes ad slots for monetization.

## 🚀 Getting Started

### 1. Installation

First, install the dependencies:

```bash
npm install
```

### 2. Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏆 Best Hosting Choice: Cloudflare Pages

You asked to compare with **Google Blogger**. Here is the honest truth:

| Feature | **Cloudflare Pages** (Winner) 🥇 | **Google Blogger** 🥈 | GitHub Pages 🥉 |
| :--- | :--- | :--- | :--- |
| **Best For** | **Web Apps & Tools** (Like this project) | Simple Articles & Diaries | Documentation |
| **Earning** | ✅ High (Ads + Affiliate) | ✅ High (Native AdSense) | ⚠️ Grey Area |
| **Functionality**| **Unlimited** (Search, Filters, Data) | **Limited** (Only text posts) | Static Files |
| **Custom Domain**| Free | Free (requires buying domain) | Free |

### Why NOT Blogger?
**Blogger is for writing stories.** It cannot easily handle the **"Search by Ward"** feature we built.
*   If you use Blogger, you lose the search engine and the interactive map features.
*   You would have to manually write 227 separate posts for each ward.
*   Updating data is painful.

### Why Cloudflare Pages is better for YOU:
1.  **It runs this specific software**: You have a custom "Corporator Search Engine". Blogger cannot run this.
2.  **Professionalism**: This looks like a serious government/news portal. Blogger sites often look like personal diaries.
3.  **Earnings**: You can place ads exactly where you want them (like inside the list), whereas Blogger limits layout control.

### 🚀 How to Deploy on Cloudflare Pages (Step-by-Step)

1.  **Push Code to GitHub**:
    *   Create a repository on GitHub.
    *   Push this code to it.
2.  **Connect to Cloudflare**:
    *   Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
    *   Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
    *   Select your `election_results` repository.
3.  **Configure Build**:
    *   **Framework Preset**: Select `Next.js (Static Export)`.
    *   **Build Command**: `npx @cloudflare/next-on-pages@latest` (or just `npm run build` since we configured export).
    *   **Output Directory**: `out`.
    *   Click **Save and Deploy**.

That's it! Your site is now online, free forever, and ready for ads.

## 💰 Monetization (Google AdSense)

To earn money from this website:

1.  **Sign Up**: Go to [Google AdSense](https://www.google.com/adsense/start/) and sign up.
2.  **Add Site**: Add your Vercel URL to AdSense.
3.  **Get Code**: AdSense will provide you with a code snippet.
    *   Add this script to `src/app/layout.js` inside the `<head>` or `<body>`.
4.  **Replace Placeholders**:
    *   Open `src/components/AdPlaceholder.js`.
    *   Replace the placeholder `div` with your actual AdSense ad unit code.
    *   Or, enable "Auto Ads" in AdSense, and Google will automatically place ads for you.

## 📝 How to Update for 2026 Results (Important)

Your reference site (`mycorporator.in`) uses **static data** that is manually typed or uploaded. It does not have a "live" connection to the government.

**You will likely receive the 2026 results as a PDF or Excel file from the government/news.**

When you get that file:
1.  **Format it**: Save it as a JSON file matching the structure in `src/data/wards.json`.
    *   *Tip*: You can ask ChatGPT or Gemini: *"Convert this Excel list of winners to JSON format: ward_no, corporator_name, party, votes"*.
2.  **Paste & Push**:
    *   Open `src/data/wards.json` in this project.
    *   Paste the new data.
    *   Commit and push to GitHub.
3.  **Done**: Cloudflare will automatically rebuild your site with the 2026 results in minutes.

**Why is this better?**
*   **Zero Maintenance**: No servers to crash.
*   **Free**: No API costs.
*   **Controllable**: You ensure the data is correct before showing it to the world.

## 📁 Project Structure

*   `src/app/page.js`: The main homepage with search and ward grid.
*   `src/components`: Reusable components (Navbar, Cards, Ads).
*   `src/data`: The dummy database (JSON).
*   `public`: Images and static assets.
