// import welcomeImageFile from '../assets/images/welcome-image.jpg'; // Cannot import, file assumed missing from src/assets

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    facebook?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Business Name",
  description: "A professional business template for your company website.",
  url: "https://yourdomain.com", // User should update this
  ogImage: "/images/og-placeholder.jpg", // Using a placeholder as welcome-image.jpg is not available in src/assets
  links: {
    twitter: "https://twitter.com/yourbusiness",
    github: "https://github.com/yourbusiness",
    linkedin: "https://linkedin.com/company/yourbusiness",
    facebook: "https://facebook.com/yourbusiness",
  },
};
