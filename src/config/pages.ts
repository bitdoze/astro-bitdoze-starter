import { siteConfig } from "./site";
import { companyConfig } from "./company";
import { imageAssets } from "./assets"; // This should provide ImageAsset types
import { getCtaSection } from "./cta";
// import welcomeImageFile from "../assets/images/welcome-image.jpg"; // Commented out due to missing file

// Page definitions
export interface PageConfig {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string; // Uses siteConfig.ogImage which is now a placeholder
  sections: Section[];
}

export interface HeroSection {
  type: "hero";
  title: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  imageUrl: string; // This comes from imageAssets.hero which uses external URLs
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface WelcomeSection {
  type: "welcome";
  title: string;
  subtitle: string;
  features: {
    icon: string;
    title: string;
    description: string;
    iconColor?: string;
  }[];
  ctas: {
    primary: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
    welcome?: {
      text: string;
      link: string;
    }[];
  };
  image: string; // Changed to string for placeholder
  badge?: string;
}

export interface ServicesSection {
  type: "services";
  title: string;
  subtitle: string;
  showAllServices: boolean;
  limit?: number;
  cta?: {
    text: string;
    link: string;
  };
}

export interface TestimonialsSection {
  type: "testimonials";
  title: string;
  subtitle: string;
  testimonials: {
    content: string;
    author: string;
    role: string;
    company: string;
    avatar: string; // Assumed to be public paths or external URLs
  }[];
}

export interface CTASection {
  type: "cta";
  title: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
  trustedBy?: string;
}

export interface AboutHeroSection {
  type: "aboutHero";
  title: string;
  subtitle: string;
  imageUrl: string; // From imageAssets.hero (external)
}

export interface StorySection {
  type: "story";
  title: string;
  subtitle: string;
  content: string;
  image: string; // External URL
  stats?: { value: string; label: string }[];
}

export interface ValuesSection {
  type: "values";
  title: string;
  subtitle: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface TeamSection {
  type: "team";
  title: string;
  subtitle: string;
  team: {
    name: string;
    role: string;
    bio: string;
    image: string; // From imageAssets.team (local, but paths might be issues if files missing)
    socialMedia?: { platform: string; url: string; icon: string }[];
  }[];
}

export interface ServicesListSection {
  type: "servicesList";
  title: string;
  subtitle: string;
  showAllServices: boolean;
  cta?: {
    text: string;
    link: string;
  };
}

export interface ProcessSection {
  type: "process";
  title: string;
  subtitle: string;
  steps: {
    number: number;
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface FAQSection {
  type: "faq";
  title: string;
  subtitle: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface ContactHeroSection {
  type: "contactHero";
  title: string;
  subtitle: string;
  buttonText?: string;
}

export interface ContactInfoSection {
  type: "contactInfo";
  title: string;
  subtitle: string;
  sectionTitle?: string;
  contactInfo: {
    title: string;
    details: string;
    icon: string;
    link?: string;
  }[];
}

export interface ContactFormSection {
  type: "contactForm";
  title: string;
  subtitle: string;
  fields: {
    type: string;
    id: string;
    name: string;
    label: string;
    required: boolean;
    options?: { label: string; value: string }[];
  }[];
  submitText: string;
}

export interface MapSection {
  type: "map";
  title: string;
  subtitle: string;
  address: string;
}

export interface BusinessHoursSection {
  type: "businessHours";
  title: string;
  subtitle: string;
  hours: { days: string; hours: string }[];
  note?: string;
}

// Union type of all possible section types
type Section =
  | HeroSection
  | WelcomeSection
  | ServicesSection
  | TestimonialsSection
  | CTASection
  | AboutHeroSection
  | StorySection
  | ValuesSection
  | TeamSection
  | ServicesListSection
  | ProcessSection
  | FAQSection
  | ContactHeroSection
  | ContactInfoSection
  | ContactFormSection
  | MapSection
  | BusinessHoursSection;

// Home page configuration
export const homePageConfig: PageConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  ogImage: siteConfig.ogImage,
  sections: [
    {
      type: "hero",
      title: "Elevate Your Business with Professional Solutions",
      subtitle:
        "We provide comprehensive business services designed to help your company grow and succeed in today's competitive market.",
      ctaPrimary: {
        text: "Get Started",
        link: "/contact",
      },
      ctaSecondary: {
        text: "Learn More",
        link: "/services",
      },
      imageUrl: imageAssets.hero.main.src, // Using .src for external URL
      stats: [
        {
          value: "98%",
          label: "Customer satisfaction",
        },
        {
          value: "15+",
          label: "Years experience",
        },
        {
          value: "500+",
          label: "Clients served",
        },
      ],
    },
    {
      type: "welcome",
      title: "Welcome to " + companyConfig.name,
      subtitle:
        "We provide professional solutions for your business needs. Our experienced team is dedicated to helping your company grow and succeed in today's competitive market.",
      features: [
        {
          icon: "mdi:shield-check",
          title: "Trusted Service",
          description:
            "We pride ourselves on reliability and excellence in every project we undertake.",
          iconColor: "var(--color-primary)",
        },
        {
          icon: "mdi:lightbulb",
          title: "Innovative Solutions",
          description:
            "We bring creative thinking and modern approaches to solve your business challenges.",
          iconColor: "var(--color-secondary)",
        },
      ],
      ctas: {
        primary: {
          text: "Our Services",
          link: "/services",
        },
        secondary: {
          text: "About Us",
          link: "/about",
        },
        welcome: [
          {
            text: "Trusted Service",
            link: "/services",
          },
          {
            text: "Innovative Solutions",
            link: "/about",
          },
        ],
      },
      image: "/images/placeholder-welcome.jpg", // Placeholder path
      badge: "15+ Years Experience",
    },
    {
      type: "services",
      title: "Our Services",
      subtitle:
        "We offer comprehensive solutions to help your business thrive in today's competitive market.",
      showAllServices: false,
      limit: 3,
      cta: {
        text: "Learn More",
        link: "/services",
      },
    },
    {
      type: "testimonials",
      title: "What Our Customers Say",
      subtitle:
        "Thousands of companies worldwide trust our platform to scale their businesses.",
      testimonials: [
        {
          content:
            "This platform has completely transformed how we manage our operations. The analytics dashboard alone has saved us countless hours of manual work.",
          author: "Sarah Johnson",
          role: "CTO",
          company: "TechSolutions Inc.",
          avatar: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
        },
        {
          content:
            "We've tried several solutions before, but nothing compares to this platform. The automation features have helped us reduce operational costs by 35%.",
          author: "Michael Rodriguez",
          role: "Director of Operations",
          company: "Innovate Labs",
          avatar: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
        },
        {
          content:
            "The customer support is exceptional. Whenever we have questions, the team responds quickly and effectively. It's rare to find this level of service.",
          author: "Emily Chen",
          role: "Product Manager",
          company: "Growth Ventures",
          avatar: "https://xsgames.co/randomusers/assets/avatars/female/68.jpg",
        },
      ],
    },
    {
      ...getCtaSection(),
      trustedBy: "Trusted by leading companies worldwide",
    },
  ],
};

// About page configuration
export const aboutPageConfig: PageConfig = {
  title: "About Us",
  description:
    "Learn about our company's mission, values, and the team behind our success.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "About Us",
      subtitle:
        "Learn about our company's mission, values, and the team behind our success.",
      imageUrl: imageAssets.hero.about.src, // Using .src for external URL
    },
    {
      type: "story",
      title: "Our Story",
      subtitle: "How it all began",
      content: `<p>Founded in 2008, ${companyConfig.name} began with a simple mission: to provide businesses with the tools and services they need to succeed in an increasingly digital world.</p>

      <p>What started as a small team of passionate professionals has grown into a full-service agency with expertise across multiple domains. Throughout our growth, we've maintained our commitment to quality, innovation, and client satisfaction.</p>

      <p>Today, we serve clients from various industries worldwide, helping them navigate the complexities of modern business and technology. Our approach combines industry best practices with innovative solutions tailored to each client's unique needs.</p>`,
      image:
        "https://images.unsplash.com/photo-1551761429-8232f9f5955c?q=80&w=2070&auto=format&fit=crop", // External
      stats: [
        { value: "15+", label: "Years of experience" },
        { value: "500+", label: "Clients worldwide" },
        { value: "150+", label: "Team members" },
      ],
    },
    {
      type: "values",
      title: "Our Values",
      subtitle: "The principles that guide everything we do",
      values: [
        {
          title: "Excellence",
          description:
            "We strive for excellence in every project we undertake, ensuring the highest quality of service for our clients.",
          icon: "mdi:star",
        },
        {
          title: "Innovation",
          description:
            "We embrace innovative thinking and approaches to solve complex problems and drive business growth.",
          icon: "mdi:lightbulb",
        },
        {
          title: "Integrity",
          description:
            "We operate with honesty, transparency, and accountability in all our client and team interactions.",
          icon: "mdi:shield-check",
        },
        {
          title: "Collaboration",
          description:
            "We believe in the power of collaboration, working closely with clients and team members to achieve shared goals.",
          icon: "mdi:account-group",
        },
        {
          title: "Client-Focus",
          description:
            "We prioritize our clients' needs and goals, tailoring our solutions to deliver meaningful results.",
          icon: "mdi:handshake",
        },
        {
          title: "Continuous Learning",
          description:
            "We are committed to continuous learning and improvement, staying at the forefront of industry trends and best practices.",
          icon: "mdi:book-open-page-variant",
        },
      ],
    },
    {
      type: "team",
      title: "Our Leadership Team",
      subtitle: "Meet the experts behind our success",
      team: [
        {
          name: "John Smith",
          role: "CEO & Founder",
          bio: "John brings over 20 years of experience in business strategy and technology leadership. His vision and expertise have been instrumental in our company's growth and success.",
          image: imageAssets.team["john-smith"].src, // Using .src from imported local asset
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Twitter",
              url: "https://twitter.com/",
              icon: "mdi:twitter",
            },
          ],
        },
        {
          name: "Sarah Johnson",
          role: "Chief Operating Officer",
          bio: "Sarah oversees our day-to-day operations, ensuring that we deliver exceptional service to our clients while maintaining operational efficiency.",
          image: imageAssets.team["jane-doe"].src, // Example, assuming jane-doe is Sarah
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Twitter",
              url: "https://twitter.com/",
              icon: "mdi:twitter",
            },
          ],
        },
        {
          name: "Michael Chen",
          role: "Chief Technology Officer",
          bio: "Michael leads our technology initiatives, keeping us at the forefront of innovation and ensuring that we leverage the latest technologies to serve our clients.",
          image: imageAssets.team["michael-brown"].src, // Example
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "GitHub",
              url: "https://github.com/",
              icon: "mdi:github",
            },
          ],
        },
        {
          name: "Emily Rodriguez",
          role: "Chief Marketing Officer",
          bio: "Emily spearheads our marketing strategies, helping clients elevate their brand presence and achieve their marketing objectives.",
          image: imageAssets.team["emily-chen"].src, // Example
          socialMedia: [
            {
              platform: "LinkedIn",
              url: "https://linkedin.com/",
              icon: "mdi:linkedin",
            },
            {
              platform: "Twitter",
              url: "https://twitter.com/",
              icon: "mdi:twitter",
            },
          ],
        },
      ],
    },
    getCtaSection(),
  ],
};

// Services page configuration
export const servicesPageConfig: PageConfig = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of professional services designed to help your business grow and succeed.",
  ogType: "website",
  sections: [
    {
      type: "aboutHero",
      title: "Our Services",
      subtitle: "Comprehensive solutions tailored to your business needs",
      imageUrl: imageAssets.hero.services.src, // Using .src for external URL
    },
    {
      type: "servicesList",
      title: "What We Offer",
      subtitle:
        "Explore our range of professional services designed to help your business grow and succeed.",
      showAllServices: true,
      cta: {
        text: "Learn More",
        link: "/services",
      },
    },
    {
      type: "process",
      title: "Our Process",
      subtitle: "How we deliver exceptional results for your business",
      steps: [
        {
          number: 1,
          title: "Discovery",
          description:
            "We begin by understanding your business, goals, challenges, and requirements through in-depth consultations.",
          icon: "mdi:magnify",
        },
        {
          number: 2,
          title: "Strategy",
          description:
            "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
          icon: "mdi:lightbulb",
        },
        {
          number: 3,
          title: "Implementation",
          description:
            "Our expert team implements the strategy, applying industry best practices and innovative approaches.",
          icon: "mdi:cog",
        },
        {
          number: 4,
          title: "Optimization",
          description:
            "We continuously monitor performance and make necessary adjustments to optimize results and ensure success.",
          icon: "mdi:chart-line",
        },
      ],
    },
    {
      type: "faq",
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services",
      questions: [
        {
          question: "What industries do you serve?",
          answer:
            "We work with clients across various industries, including technology, healthcare, finance, retail, education, and manufacturing. Our diverse expertise allows us to understand different industry dynamics and deliver tailored solutions.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary depending on scope, complexity, and specific requirements. During our initial consultation, we'll provide a realistic timeline based on your project needs. We're committed to meeting deadlines while ensuring quality results.",
        },
        {
          question: "Do you offer ongoing support after project completion?",
          answer:
            "Yes, we offer various support and maintenance options to ensure your continued success. We can discuss these options during the project planning phase to find the best fit for your needs and budget.",
        },
        {
          question: "How do you handle confidential information?",
          answer:
            "We take data security and confidentiality seriously. We adhere to strict protocols and industry best practices to protect your information. All client data is handled with the utmost care, and we're happy to sign NDAs before starting any work.",
        },
        {
          question: "What makes your services different from others?",
          answer:
            "Our approach combines industry expertise, innovative thinking, and a client-centric focus. We don't just provide generic solutions—we work closely with you to understand your unique challenges and develop customized strategies that align with your specific goals and vision.",
        },
      ],
    },
    getCtaSection(),
  ],
};

// Contact page configuration
export const contactPageConfig: PageConfig = {
  title: "Contact Us",
  description:
    "Get in touch with our team for inquiries, support, or to discuss how we can help your business.",
  ogType: "website",
  sections: [
    {
      type: "contactHero",
      title: "Contact Us",
      subtitle:
        "Get in touch with our team for inquiries, support, or to discuss how we can help your business.",
      buttonText: "Get in Touch",
    },
    {
      type: "contactInfo",
      title: "Get in Touch",
      subtitle:
        "Have questions or ready to get started? Reach out to us using any of the methods below, and we'll get back to you as soon as possible.",
      sectionTitle: "Connect With Us",
      contactInfo: [
        {
          title: "Email Us",
          details: companyConfig.contact.email,
          icon: "mdi:email",
          link: `mailto:${companyConfig.contact.email}`,
        },
        {
          title: "Call Us",
          details: companyConfig.contact.phone,
          icon: "mdi:phone",
          link: `tel:${companyConfig.contact.phone.replace(/\s+/g, "")}`,
        },
        {
          title: "Visit Us",
          details: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
          icon: "mdi:map-marker",
          link: `https://maps.google.com/?q=${encodeURIComponent(
            `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
          )}`,
        },
      ],
    },
    {
      type: "contactForm",
      title: "Send Us a Message",
      subtitle:
        "Fill out the form below and we'll get back to you as soon as possible.",
      fields: [
        {
          type: "text",
          id: "first-name",
          name: "first-name",
          label: "First Name",
          required: true,
        },
        {
          type: "text",
          id: "last-name",
          name: "last-name",
          label: "Last Name",
          required: true,
        },
        {
          type: "email",
          id: "email",
          name: "email",
          label: "Email Address",
          required: true,
        },
        {
          type: "tel",
          id: "phone",
          name: "phone",
          label: "Phone Number",
          required: false,
        },
        {
          type: "select",
          id: "subject",
          name: "subject",
          label: "Subject",
          required: true,
          options: [
            { label: "General Inquiry", value: "general" },
            { label: "Support", value: "support" },
            { label: "Sales", value: "sales" },
            { label: "Partnership", value: "partnership" },
            { label: "Other", value: "other" },
          ],
        },
        {
          type: "textarea",
          id: "message",
          name: "message",
          label: "Message",
          required: true,
        },
        {
          type: "checkbox",
          id: "consent",
          name: "consent",
          label:
            "I consent to having this website store my submitted information so they can respond to my inquiry.",
          required: true,
        },
      ],
      submitText: "Send Message",
    },
    {
      type: "map",
      title: "Our Location",
      subtitle: `We're conveniently located in the heart of ${companyConfig.contact.address.city}. Feel free to visit us during business hours.`,
      address: `${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state} ${companyConfig.contact.address.zip}`,
    },
    {
      type: "businessHours",
      title: "Business Hours",
      subtitle:
        "Our team is available during the following hours to assist you.",
      hours: [
        {
          days: "Monday - Friday",
          hours: "9:00 AM - 5:00 PM",
        },
        {
          days: "Saturday",
          hours: "10:00 AM - 2:00 PM",
        },
        {
          days: "Sunday",
          hours: "Closed",
        },
      ],
      note: "Need assistance outside of business hours? Send us an email, and we'll get back to you as soon as possible.",
    },
    {
      ...getCtaSection(),
      trustedBy: "Trusted by leading companies worldwide",
    },
  ],
};
