import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TIER_1_CRITICAL, preloadImages } from "../../utils/preloadAssets";

// Preloader only waits for the 4 hero images (Tier 1).
// They are declared as <link rel="preload"> in index.html so the browser
// starts fetching them before any JS runs → resolves almost instantly.
// Using preloadImages() routes them through IMAGE_CACHE so they are pinned
// in memory for the full session and never re-fetched or re-decoded.

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const total = TIER_1_CRITICAL.length;

    useEffect(() => {
        let isMounted = true;
        let loaded = 0;

        const tick = () => {
            if (!isMounted) return;
            loaded++;
            setProgress(Math.min(100, Math.round((loaded / total) * 100)));
        };

        // Load each Tier 1 image individually so we can tick progress per image.
        // preloadImages() pins each one in IMAGE_CACHE automatically.
        const promises = TIER_1_CRITICAL.map((src) =>
            preloadImages([src], "high").then(tick)
        );

        // Also await fonts (preconnected → fast)
        Promise.all([...promises, document.fonts.ready]).then(() => {
            if (!isMounted) return;
            setProgress(100);
            setTimeout(() => {
                if (isMounted) onComplete?.();
            }, 400);
        });

        return () => { isMounted = false; };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-biz-cream"
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            }}
        >
            {/* Subtle background shimmer */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-biz-sand/10 to-transparent opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-5xl font-bold tracking-tight text-biz-charcoal">
                        biznor<span className="text-biz-bronze">X</span>
                    </h1>
                </motion.div>

                {/* Progress Bar */}
                <div className="w-64 h-[2px] bg-biz-sand-muted/30 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-biz-bronze"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut", duration: 0.25 }}
                    />
                </div>

                {/* Percentage counter */}
                <motion.span
                    key={progress}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="mt-5 text-biz-charcoal font-dm text-sm font-semibold tracking-tighter"
                >
                    {progress}%
                </motion.span>
            </div>
        </motion.div>
    );
};

export default Preloader;
