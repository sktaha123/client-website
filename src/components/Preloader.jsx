import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imagesToPreload = [
    // Brand Assets
    "/svgs/Biznorlogo.png",
    "/svgs/Alix.png",
    "/favicon.ico",

    // Hero Backgrounds
    "/svgs/h1.webp",
    "/svgs/h2.webp",
    "/svgs/h3.webp",
    "/svgs/h4.webp",
    "/svgs/heroimage.webp",
    "/svgs/heroimage.jpg",

    // Industry Cards
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

    // Service & About Cards
    "/cardsimages/about1.webp",
    "/cardsimages/about2.webp",
    "/cardsimages/about3.webp",
    "/cardsimages/s1.webp",
    "/cardsimages/s2.webp",
    "/cardsimages/s3.webp",
    "/cardsimages/s4.webp",
    "/cardsimages/s5.webp",
    "/cardsimages/s6.webp",
    "/cardsimages/s7.webp",
    "/cardsimages/s8.webp",
    "/cardsimages/softsaas.webp",
    "/cardsimages/softsoft.webp",
    "/cardsimages/softweb.webp",

    // Other Visuals
    "/svgs/linkedincard.webp",
    "/svgs/threads.png",
    "/svgs/extra/medal.svg"
];

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loadedCount = 0;
        const total = imagesToPreload.length;

        if (total === 0) {
            onComplete();
            return;
        }

        const updateProgress = () => {
            loadedCount++;
            const newProgress = Math.round((loadedCount / total) * 100);
            setProgress(newProgress);
        };

        // Create an array of image load promises
        const imagePromises = imagesToPreload.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                // Force browser to treat these as critical
                img.loading = "eager";
                img.onload = () => {
                    updateProgress();
                    resolve();
                };
                img.onerror = () => {
                    updateProgress();
                    resolve(); // Resolve anyway to not block the loader
                };
            });
        });

        // Wait for all images AND fonts
        Promise.all([
            ...imagePromises,
            document.fonts.ready // Ensure high-quality typography is ready
        ]).then(() => {
            // Smooth exit: ensure the user sees 100% for a brief moment
            setTimeout(() => {
                onComplete();
            }, 1000);
        });

    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-biz-cream"
            exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
            }}

        >
            {/* Animated Background Gradient (Subtle) */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-biz-sand/20 to-transparent opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    {/* Text Logo */}
                    <h1 className="text-5xl font-bold tracking-tight text-biz-charcoal">
                        Biznor<span className="text-biz-bronze">X</span>
                    </h1>
                </motion.div>

                {/* Progress Container */}
                <div className="w-64 h-1 bg-biz-sand-muted/50 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-biz-bronze"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Percentage Text */}
                <div className="mt-4 overflow-hidden h-6">
                    <motion.span
                        key={progress}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="block text-biz-charcoal-muted font-dm text-sm font-medium tracking-widest"
                    >
                        {progress}%
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
