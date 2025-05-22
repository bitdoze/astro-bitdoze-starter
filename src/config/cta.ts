export interface CTAConfig {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  trustedBy?: string;
}

// This is the shared CTA configuration used across all pages
export const ctaConfig: CTAConfig = {
  title: "Ready to transform your business?",
  description:
    "Get started today and see the difference our services can make for your business growth and success.",
  primaryAction: {
    text: "Get Started",
    href: "/contact",
  },
  secondaryAction: {
    text: "Learn More",
    href: "/services",
  },
};

// CTA section configuration that can be imported in pages.ts
export const getCtaSection = () => ({
  type: "cta",
  title: ctaConfig.title,
  subtitle: ctaConfig.description,
  ctaPrimary: {
    text: ctaConfig.primaryAction.text,
    link: ctaConfig.primaryAction.href,
  },
  ctaSecondary: ctaConfig.secondaryAction
    ? {
        text: ctaConfig.secondaryAction.text,
        link: ctaConfig.secondaryAction.href,
      }
    : undefined,
  trustedBy: "Trusted by leading companies worldwide",
});
