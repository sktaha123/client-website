// src/utils/preloadAssets.js
// 3-tier image loading strategy:
//   TIER 1 — Preloader waits for these (hero carousel, also <link rel="preload"> in HTML)
//   TIER 2 — Loaded right after preloader dismisses (industry & service cards)
//   TIER 3 — Loaded during browser idle time (About, Software images)

// ─── PERSISTENT IN-MEMORY CACHE ──────────────────────────────────────────────
//
// WHY: `new Image()` objects created inside a function are local variables.
// Once the Promise resolves, they have zero references and become eligible
// for garbage collection — meaning the browser can evict the decoded pixels
// from memory under pressure, causing a re-decode or even a re-fetch on
// the next render.
//
// FIX: Store every loaded Image object in this module-level Map.
// Since this module is a singleton (loaded once, cached by the JS module
// system), the Map lives for the entire page session. GC can never collect
// any image that has an entry here. The images stay fully decoded in RAM.
//
// This is the same pattern browsers use internally for preloaded resources.
//
const IMAGE_CACHE = new Map(); // url → HTMLImageElement

// ─── TIER 1: Critical — Preloader WAITS for these ────────────────────────────
// Also declared as <link rel="preload"> in index.html so the browser starts
// fetching them before any JS runs. By the time this code executes these are
// already in the browser's network cache → resolve almost instantly.
export const TIER_1_CRITICAL = [
    "/svgs/h1.webp",
    "/svgs/Biznorlogo.png",
];

// ─── TIER 2: Important — Loaded right after preloader dismisses ──────────────
export const TIER_2_IMPORTANT = [
    "/svgs/h2.webp",
    "/svgs/h3.webp",
    "/svgs/h4.webp",

    // Industry cards (marquee on /industries)
    "/industries/manufacturing.webp",
    "/industries/healthcare.webp",
    "/industries/technology.webp",
    "/industries/retail.webp",
    "/industries/real-estate.webp",
    "/industries/logistics.webp",
    "/industries/education.webp",
    "/industries/hospitality.webp",
    "/industries/banking-finance.webp",
    "/industries/energy.webp",
    "/industries/aviation.webp",
    "/industries/construction.webp",

    // Service cards (rotating panel on /services)
    "/cardsimages/s1.webp",
    "/cardsimages/s2.webp",
    "/cardsimages/s3.webp",
    "/cardsimages/s4.webp",
    "/cardsimages/s5.webp",
    "/cardsimages/s6.webp",
    "/cardsimages/s7.webp",
    "/cardsimages/s8.webp",
];

// ─── TIER 3: Deferred — Loaded during browser idle time ──────────────────────
export const TIER_3_DEFERRED = [
    "/cardsimages/about1.webp",
    "/cardsimages/about2.webp",
    "/cardsimages/about3.webp",
    "/cardsimages/softcontent.webp",
    "/cardsimages/softmarket.webp",
    "/cardsimages/softsaas.webp",
    "/cardsimages/softweb.webp",
    "/cardsimages/softsoft.webp",
    "/svgs/Alix.png",
];

// ─── CORE PRELOAD FUNCTION ────────────────────────────────────────────────────
/**
 * Fetches and decodes images, storing each in IMAGE_CACHE so they are NEVER
 * garbage-collected during the session. Once an image is in the cache,
 * subsequent calls with the same URL are no-ops (instant resolve).
 *
 * @param {string[]} urls      - Image paths to preload
 * @param {'high'|'low'|'auto'} priority - fetchPriority hint for the browser
 * @returns {Promise<void>}
 */
export const preloadImages = (urls, priority = "auto") => {
    return Promise.all(
        urls.map((src) => {
            // Already loaded and pinned in memory — nothing to do
            if (IMAGE_CACHE.has(src)) return Promise.resolve();

            return new Promise((resolve) => {
                const img = new Image();
                img.fetchPriority = priority;
                img.decoding = "async";
                img.src = src;

                const done = () => {
                    // Pin the image object in module-level cache.
                    // This strong reference prevents GC for the whole session.
                    IMAGE_CACHE.set(src, img);
                    resolve();
                };

                // If it's already cached by the browser (e.g. from <link rel="preload">),
                // img.complete is true synchronously — store and resolve immediately.
                if (img.complete) {
                    done();
                    return;
                }

                img.onload = done;
                img.onerror = () => {
                    // Don't cache broken images, but never block progress
                    resolve();
                };
            });
        })
    );
};

// ─── CACHE INSPECTOR (dev/debug helper) ──────────────────────────────────────
/** Returns how many images are currently pinned in memory. */
export const getCacheSize = () => IMAGE_CACHE.size;

/** Returns all cached URLs (useful for debugging). */
export const getCachedUrls = () => [...IMAGE_CACHE.keys()];

// ─── BACKGROUND SILENT LOADER ─────────────────────────────────────────────────
/**
 * Loads Tier 2 → Tier 3 images AFTER the preloader dismisses.
 *
 * Strategy:
 *   - Tier 2 starts immediately (no idle wait) since users often navigate
 *     to /services or /industries right after the homepage loads.
 *   - Tier 3 waits for browser idle time since those pages are visited less.
 *
 * All images are stored in IMAGE_CACHE — once loaded they NEVER reload
 * regardless of how many times the user navigates between routes.
 */
export const loadBackgroundAssets = () => {
    const scheduleIdle = (fn) => {
        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(fn, { timeout: 4000 });
        } else {
            setTimeout(fn, 300);
        }
    };

    // Tier 2: load immediately (no idle delay) — users may navigate
    // to /industries or /services very quickly after the preloader clears
    preloadImages(TIER_2_IMPORTANT, "low").then(() => {
        // Tier 3: secondary pages — load when browser has nothing else to do
        scheduleIdle(() => {
            preloadImages(TIER_3_DEFERRED, "low");
        });
    });
};
