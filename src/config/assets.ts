// import siteLogoSrc from '../assets/logo.svg'; // Commented out: File missing
// import janeDoeSrc from '../assets/images/team/jane-doe.jpg'; // Commented out: File missing
// import johnSmithSrc from '../assets/images/team/john-smith.jpg'; // Commented out: File missing
// import emilyChenSrc from '../assets/images/team/emily-chen.jpg'; // Commented out: File missing
// import michaelBrownSrc from '../assets/images/team/michael-brown.jpg'; // Commented out: File missing
// import webDesignSrc from '../assets/images/services/web-design.jpg'; // Commented out: File missing
// import digitalMarketingSrc from '../assets/images/services/digital-marketing.jpg'; // Commented out: File missing
// import contentCreationSrc from '../assets/images/services/content-creation.jpg'; // Commented out: File missing
// import seoSrc from '../assets/images/services/seo.jpg'; // Commented out: File missing
// import brandStrategySrc from '../assets/images/services/brand-strategy.jpg'; // Commented out: File missing
// import dataAnalyticsSrc from '../assets/images/services/data-analytics.jpg'; // Commented out: File missing

export interface ImageAsset {
  src: string; 
  alt?: string;
}

export interface ImageAssets {
  hero: {
    main: ImageAsset;
    about: ImageAsset;
    services: ImageAsset;
    contact: ImageAsset;
  };
  logos: {
    site: ImageAsset;
    partnerLogos: ImageAsset[];
    trustedBadges: {
      id: string;
      svgPath: string;
    }[];
  };
  team: {
    [key: string]: ImageAsset;
  };
  services: {
    [key: string]: ImageAsset;
  };
}

export const imageAssets: ImageAssets = {
  hero: { 
    main: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Hero Main" },
    about: { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", alt: "Hero About" },
    services: { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop", alt: "Hero Services" },
    contact: { src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop", alt: "Hero Contact" },
  },
  logos: {
    site: { src: "/images/placeholder_logo.svg", alt: "Site Logo Placeholder" },
    partnerLogos: [ 
      { src: "/partners/partner1.svg", alt: "Partner 1 Logo" },
      { src: "/partners/partner2.svg", alt: "Partner 2 Logo" },
      { src: "/partners/partner3.svg", alt: "Partner 3 Logo" },
      { src: "/partners/partner4.svg", alt: "Partner 4 Logo" },
    ],
    trustedBadges: [ 
      {
        id: "badge1",
        svgPath:
          "M8 36L20 8L32 36 M12 26H28 M48 12H40V32H48 M48 22H40 M59 22 a10 10 0 1 0 0.1 0 M80 32V12L90 24L100 12V32 M110 12H122C124.209 12 126 13.7909 126 16V16C126 18.2091 124.209 20 122 20H110V12Z M110 20H124C126.209 20 128 21.7909 128 24V24C128 26.2091 126.209 28 124 28H110V20Z M110 28V32 M138 12C134.686 12 132 14.6863 132 18V26C132 29.3137 134.686 32 138 32H146C149.314 32 152 29.3137 152 26V18C152 14.6863 149.314 12 146 12H138Z",
      },
      {
        id: "badge2",
        svgPath:
          "M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8Z M16 18.5C16 17.1193 17.1193 16 18.5 16H21.5C22.8807 16 24 17.1193 24 18.5V21.5C24 22.8807 22.8807 24 21.5 24H18.5C17.1193 24 16 22.8807 16 21.5V18.5Z M44 8H52L60 28H52 M52 20H60 M76 8L64 20L76 32 M64 20H88",
      },
      {
        id: "badge3",
        svgPath:
          "M8 12 h20 v20 a10 10 0 0 1 -10 10 a10 10 0 0 1 -10 -10 v-20 M28 24C28 17.3726 33.3726 12 40 12V32C33.3726 32 28 26.6274 28 20V24Z M48 12H60C64.4183 12 68 15.5817 68 20V20C68 24.4183 64.4183 28 60 28H48V12Z M59 20 a3 3 0 1 0 0.1 0",
      },
      {
        id: "badge4",
        svgPath:
          "M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z M16 18C16 16.8954 16.8954 16 18 16H22C23.1046 16 24 16.8954 24 18V22C24 23.1046 23.1046 24 22 24H18C16.8954 24 16 23.1046 16 22V18Z M44 12H56C58.2091 12 60 13.7909 60 16V16C60 18.2091 58.2091 20 56 20H44V12Z M44 20H58C60.2091 20 62 21.7909 62 24V24C62 26.2091 60.2091 28 58 28H44V20Z",
      },
      {
        id: "badge5",
        svgPath:
          "M20 8L8 20L20 32 M8 20H32 M48 8L36 20L48 32 M60 8L72 20L60 32 M36 20H72 M88 12C84.6863 12 82 14.6863 82 18V26C82 29.3137 84.6863 32 88 32H96C99.3137 32 102 29.3137 102 26V18C102 14.6863 99.3137 12 96 12H88Z",
      },
    ],
  },
  team: {
    "jane-doe": { src: "/images/team/placeholder_jane_doe.jpg", alt: "Jane Doe" },
    "john-smith": { src: "/images/team/placeholder_john_smith.jpg", alt: "John Smith" },
    "emily-chen": { src: "/images/team/placeholder_emily_chen.jpg", alt: "Emily Chen" },
    "michael-brown": { src: "/images/team/placeholder_michael_brown.jpg", alt: "Michael Brown" },
  },
  services: {
    "web-design": { src: "/images/services/placeholder_web_design.jpg", alt: "Web Design" },
    "digital-marketing": { src: "/images/services/placeholder_digital_marketing.jpg", alt: "Digital Marketing" },
    "content-creation": { src: "/images/services/placeholder_content_creation.jpg", alt: "Content Creation" },
    seo: { src: "/images/services/placeholder_seo.jpg", alt: "SEO" },
    "brand-strategy": { src: "/images/services/placeholder_brand_strategy.jpg", alt: "Brand Strategy" },
    "data-analytics": { src: "/images/services/placeholder_data_analytics.jpg", alt: "Data Analytics" },
  },
};
