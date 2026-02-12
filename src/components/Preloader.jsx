import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imagesToPreload = [
    // SVGs & WebPs in public/svgs/
    "/svgs/Alix.png",
    "/svgs/Biznorlogo.png",
    "/svgs/h1.webp",
    "/svgs/h2.webp",
    "/svgs/h3.webp",
    "/svgs/h4.webp",
    "/svgs/heroimage.webp",
    "/svgs/linkedincard.webp",
    "/svgs/threads.png",

    // Cards in public/cardsimages/
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

    // Industries in public/industries/
    "/industries/aviation.webp",
    "/industries/banking-finance.webp",
    "/industries/construction.webp",
    "/industries/education.webp",
    "/industries/energy.webp",
    "/industries/healthcare.webp",
    "/industries/hospitality.webp",
    "/industries/logistics.webp",
    "/industries/manufacturing.webp",
    "/industries/real-estate.webp",
    "/industries/retail.webp",
    "/industries/technology.webp"
];

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loadedCount = 0;
        const total = imagesToPreload.length;

        // If no images, complete immediately
        if (total === 0) {
            onComplete();
            return;
        }

        const updateProgress = () => {
            loadedCount++;
            const newProgress = Math.round((loadedCount / total) * 100);
            setProgress(newProgress);

            if (loadedCount === total) {
                // Add a small delay for the user to see 100%
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        };

        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = updateProgress;
            img.onerror = updateProgress; // Proceed even if error
        });
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-biz-cream"
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
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
