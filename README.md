# Riletto 🚀
### The Enterprise All-in-One Autonomous Email Marketing & Data Orchestration Engine

Riletto is a high-scale, production-ready B2B data orchestration platform designed to handle the entire lifecycle of cold outreach and lead generation. Built on an offline-first, serverless architecture, the engine combines high-velocity web scraping, multi-source data enrichment, automated deduplication, and real-time verification pipelines.

At its core, Riletto features a **custom mini-N8N visual automation workflow engine**, allowing users to drag, drop, and link custom tool nodes to execute complex, agentic background data pipelines autonomously.

---

## ⚡ Key Architectural Capabilities

*   **Autonomous Web Crawling & Scraping:** High-throughput data collection engines leveraging Puppeteer and Playwright to extract metadata with advanced anti-bot bypassing.
*   **Visual Workflow Automation (Mini-N8N):** A custom Node-based automation system where users configure independent tools as operational nodes to handle complex, asynchronous background logic.
*   **Data Marketplace & Credit Attribution Loop:** Features a dynamic revenue-share engine that automatically updates a user's credit balances in real-time when the system closes an anonymous buyer sale from their data pools.
*   **Universal Data Portability:** Allows both registered members and authorized guests to instantly clean, format, and export scraped leads into optimized CSV/Excel payloads, or route them via custom CRM connector nodes (HubSpot, Salesforce) built from scratch.

---

## 🏗️ Technical Stack & System Infrastructure

*   **Runtime & Logic:** Node.js, TypeScript, JavaScript (ES6+), Express.js
*   **Frontend & State:** Next.js (Server Components), React 19, TanStack React Query, Tailwind CSS
*   **Data Layers & Orchestration:** Supabase, PostgreSQL, SQLite, Inngest (Durable Step-Functions)
*   **Automation & Scrapers:** Puppeteer, Playwright, Custom AST Node Parsers

---

## 🛠️ Solved Engineering Bottlenecks

### 1. Eliminating Memory Leaks during Bulk Scraping
*   **Challenge:** Long-running Puppeteer/Playwright instances bloating server memory during massive multi-domain crawling.
*   **Solution:** Implemented a decoupled, stateless worker structure that disposes of browser targets immediately after extraction, routing raw data payloads into asynchronous background lines.

### 2. Live Server-State Synchronization
*   **Challenge:** Managing visual state updates across highly complex node-based visual interfaces without freezing the UI thread.
*   **Solution:** Engineered an immutable, centralized state architecture using local SQLite data layers and React hooks, using TanStack Query to patch mutations back to the main server state smoothly.
