import type { ImageAsset } from "./assets"; // Import ImageAsset type
import { imageAssets } from "./assets"; // Import imageAssets object

export interface Service {
  title: string;
  description: string;
  icon: string;
  link?: string;
  image?: ImageAsset; // Add image property
}

export const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Professional website design services to elevate your online presence and brand identity.",
    icon: "mdi:web",
    link: "/services/web-design",
    image: imageAssets.services["web-design"],
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to reach your target audience and drive growth.",
    icon: "mdi:bullhorn",
    link: "/services/digital-marketing",
    image: imageAssets.services["digital-marketing"],
  },
  {
    title: "Content Creation",
    description:
      "High-quality content creation services to engage your audience and boost your online visibility.",
    icon: "mdi:pencil",
    link: "/services/content-creation",
    image: imageAssets.services["content-creation"],
  },
  {
    title: "SEO Optimization",
    description:
      "SEO services to improve your search engine rankings and increase organic traffic.",
    icon: "mdi:magnify",
    link: "/services/seo",
    image: imageAssets.services["seo"],
  },
  {
    title: "Brand Strategy",
    description:
      "Strategic brand development to help you stand out in competitive markets.",
    icon: "mdi:strategy",
    link: "/services/brand-strategy",
    image: imageAssets.services["brand-strategy"],
  },
  {
    title: "Data Analytics",
    description:
      "Data-driven insights to help you make informed business decisions and optimize performance.",
    icon: "mdi:chart-line",
    link: "/services/data-analytics",
    image: imageAssets.services["data-analytics"],
  },
];
