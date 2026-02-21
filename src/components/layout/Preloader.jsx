import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Use a Set to ensure unique assets and prevent over-counting
const assets = [...new Set([
    // Brand Assets
    "/svgs/Biznorlogo.png",
    "/svgs/Alix.png",
    "/favicon.ico",
    "/favicon.svg",
    "/apple-touch-icon.png",

    // Hero Backgrounds & Core Visuals
    "/svgs/h1.webp",
    "/svgs/h2.webp",
    "/svgs/h3.webp",
    "/svgs/h4.webp",
    "/svgs/heroimage.webp",
    "/svgs/heroimage.jpg",
    "/svgs/og-image.jpg",
    "/svgs/linkedincard.webp",
    "/svgs/threads.png",
    "/svgs/extra/medal.svg",

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
    "/cardsimages/softcontent.webp",
    "/cardsimages/softmarket.webp"
])];

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const totalAssets = assets.length;

    useEffect(() => {
        let isMounted = true;
        let loadedCount = 0;

        const updateProgress = () => {
            if (!isMounted) return;
            loadedCount++;
            const newProgress = Math.min(100, Math.floor((loadedCount / totalAssets) * 100));
            setProgress(newProgress);
        };

        const loadAssets = async () => {
            const imagePromises = assets.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;

                    const handleAssetDone = async () => {
                        try {
                            if ('decode' in img) await img.decode();
                        } catch (e) {
                            // Ignore decoding errors
                        } finally {
                            updateProgress();
                            resolve();
                        }
                    };

                    img.onload = handleAssetDone;
                    img.onerror = () => {
                        updateProgress();
                        resolve();
                    };
                });
            });

            await Promise.all([...imagePromises, document.fonts.ready]);

            if (isMounted) {
                setProgress(100);
                setTimeout(onComplete, 800);
            }
        };

        loadAssets();

        return () => {
            isMounted = false;
        };
    }, [onComplete, totalAssets]);

    return (
        <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-biz-cream"
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* Animated Background Gradient (Subtle) */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-biz-sand/10 to-transparent opacity-50 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-5xl font-bold tracking-tight text-biz-charcoal">
                        biznor<span className="text-biz-bronze">X</span>
                    </h1>
                </motion.div>

                {/* Progress Container */}
                <div className="w-64 h-[2px] bg-biz-sand-muted/30 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-biz-bronze"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    />
                </div>

                {/* Percentage and Loading Text */}
                <div className="mt-6 flex flex-col items-center gap-1">
                    <motion.span
                        key={progress}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-biz-charcoal font-dm text-sm font-semibold tracking-tighter"
                    >
                        
                        {progress}%
                    </motion.span>
                   
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
