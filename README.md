# Riletto 🚀
### The Enterprise All-in-One Autonomous Email Marketing & Data Orchestration Engine

Riletto is a high-scale, production-ready B2B data orchestration platform designed to handle the entire lifecycle of cold outreach and lead generation. Built on an offline-first architecture, the engine combines high-velocity web scraping, multi-source data enrichment, automated deduplication, and real-time verification pipelines.

At its core, Riletto features a **custom mini-N8N visual automation workflow engine**, allowing users to drag, drop, and link custom tool nodes to execute complex, agentic background data pipelines autonomously.

---

## ⚡ Key Architectural Capabilities

*   **80% Custom Advanced Scraping:** High-yield target data extraction algorithms specifically engineered to scrape, crawl, and verify live, query-specific business metadata and emails with an 80% custom codebase footprint.
*   **Heavy Visual Workflow Automation (Mini-N8N):** A custom Node-based automation system designed from scratch where users configure independent tools as operational nodes to handle complex, asynchronous background logic.
*   **Real-Time Supabase WebSocket Stream:** All background tasks run as non-blocking asynchronous threads, piping live system update metrics directly into the frontend interface using Supabase WebSockets.
*   **Universal Data Portability:** Allows both registered members and authorized guests to instantly clean, format, and export scraped leads into optimized CSV/Excel payloads, or route them via custom CRM connector nodes (HubSpot, Salesforce) built from scratch.

---

## 🏗️ Technical Stack & System Infrastructure

*   **Runtime & Logic:** Node.js, TypeScript, JavaScript (ES6+), Express.js
*   **Frontend & State:** Next.js (Server Components), React 19, TanStack React Query, Tailwind CSS
*   **Data Layers & Orchestration:** Supabase (WebSockets), PostgreSQL, SQLite, Inngest (Durable Step-Functions)
*   **Automation & Scrapers:** Puppeteer, Playwright, Custom AST Node Parsers

---

## 🛠️ Solved Engineering Bottlenecks

### 1. Eliminating Timeout Constraints on Deep Scraping Cycles
*   **Challenge:** Executing heavy, multi-layered data extraction queries over extensive web targets continuously crashed runtime functions via rigid API gateway timeouts.
*   **Solution:** Decoupled the extraction lifecycle entirely. Processing loads are broken down into isolated data fragments using advanced array chunking, offloaded directly to background Inngest step-functions, and streamed back to the client interface seamlessly via real-time Supabase WebSocket pipelines.

### 2. Live Server-State Synchronization
*   **Challenge:** Managing visual state updates across highly complex node-based visual interfaces without freezing the UI thread.
*   **Solution:** Engineered an immutable, centralized state architecture using local SQLite data layers and React hooks, using TanStack Query to patch mutations back to the main server state smoothly.
