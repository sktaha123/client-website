// src/utils/preloadAssets.js

export const imagesToPreload = [
  // INDUSTRIES
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
  "/industries/technology.webp",

  // ABOUT
  "/cardsimages/about1.webp",
  "/cardsimages/about2.webp",
  "/cardsimages/about3.webp",

  // SERVICES
  "/cardsimages/s1.webp",
  "/cardsimages/s2.webp",
  "/cardsimages/s3.webp",
  "/cardsimages/s4.webp",
  "/cardsimages/s5.webp",
  "/cardsimages/s6.webp",
  "/cardsimages/s7.webp",
  "/cardsimages/s8.webp",

  // SOFTWARE
  "/cardsimages/softcontent.webp",
  "/cardsimages/softmarket.webp",
  "/cardsimages/softsaas.webp",
  "/cardsimages/softweb.webp"
];


// actual preloader function
export const preloadImages = (images) => {
  return Promise.all(
    images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
};