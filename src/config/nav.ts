export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface NavConfig {
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    resources: NavItem[];
    legal: NavItem[];
  };
  ctaButton?: {
    text: string;
    href: string;
  };
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  ctaButton: {
    text: "Get in Touch",
    href: "/contact",
  },
  footerNav: {
    company: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Team",
        href: "/team",
      },
      {
        title: "Careers",
        href: "/careers",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    resources: [
      {
        title: "Services",
        href: "/services",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Resources",
        href: "/resources",
      },
    ],
    legal: [
      {
        title: "Privacy Policy",
        href: "/privacy",
      },
      {
        title: "Terms of Service",
        href: "/terms",
      },
      {
        title: "Cookie Policy",
        href: "/cookies",
      },
    ],
  },
};
