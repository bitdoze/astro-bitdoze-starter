# Business Website Template

A professional and customizable Astro-based business website template with SEO optimization, responsive design, and modular configuration.

## 🚀 Features

- **Modern Design** with Tailwind CSS 4
- **CSS Variables** for easy theme customization in global.css
- **SEO Optimized** with structured data and meta tags
- **Fully Responsive** for all screen sizes
- **Performance Focused** built with Astro
- **Customizable** with easy-to-update configuration files
- **Icon Integration** using Astro Icon

## ✨ SEO Features

- **Sitemap Generation**: Automatically generates `sitemap-index.xml` (or `sitemap-0.xml`) using `@astrojs/sitemap` to help search engines discover all pages.
- **RSS Feed**: Includes an RSS feed endpoint at `/rss.xml` using `@astrojs/rss`. The feed items are currently empty and need to be populated when blog/article content is added (see `src/pages/rss.xml.js`).

## 📋 Pages

- **Home** - Landing page with hero, services, testimonials and CTA
- **About** - Company information, values, and team
- **Services** - Comprehensive overview of offered services
- **Contact** - Contact form and company information

## 🔧 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/business-website-template.git
cd business-website-template
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🛠️ Customization

### Theme Customization

The theme styling is controlled through CSS variables in `src/styles/global.css`. The template uses a robust design system with consistent variables for:

- **Colors**: Customize primary, secondary, accent, and neutral colors
- **Spacing**: Consistent spacing scale for margins, padding, and gaps
- **Border Radius**: Various radius options from small to full rounded corners
- **Box Shadows**: Shadow levels from subtle to pronounced
- **Typography**: Font families, weights, and sizes
- **Transitions**: Animation timing variables for smooth interactions

Simply modify the variables in `global.css` to update the entire site's appearance consistently. No Tailwind config file is needed as this uses Tailwind CSS 4's global CSS variable approach.

### Configuration Files

All site configuration is located in the `src/config` directory:

- **site.ts** - Website name, description, and SEO information
- **nav.ts** - Navigation links for header and footer
- **company.ts** - Company information
- **services.ts** - Service descriptions and icons
- **assets.ts** - Image paths and assets
- **pages.ts** - Page content and section configurations
- **cta.ts** - Shared Call-to-Action configuration

### Update Company Information

Edit `src/config/company.ts` to change:

- Company name and tagline
- Contact information
- Social media links
- Call-to-action text and links

### Customize Navigation

Edit `src/config/nav.ts` to update:

- Main navigation links
- Footer navigation categories
- Page links and titles

### Modify Services

Edit `src/config/services.ts` to update:

- Service titles and descriptions
- Service icons (using Iconify icon names)
- Service detail page links

### Change Assets and Images

Edit `src/config/assets.ts` to update image paths for:

- Hero section images
- Team member photos
- Service illustrations
- Logo and partner logos

### Edit Page Content

Edit `src/config/pages.ts` to update:

- Page titles, descriptions, and metadata
- Section content for all pages
- Component properties and configurations
- Content structure for each page section

### Update Call-to-Action Content

Edit `src/config/cta.ts` to update:

- CTA title and description text
- Primary and secondary button text and links
- This shared configuration ensures consistent CTAs across all pages

## 🛠️ Development Tools

This project includes Prettier, ESLint, and Stylelint to ensure code quality, consistency, and adherence to best practices.

- **Prettier**: For automatic code formatting.
- **ESLint**: For identifying and fixing problems in JavaScript and Astro files.
- **Stylelint**: For linting CSS and styles within Astro files.

### Available npm Scripts:

- `npm run format`: Formats all supported files in the project using Prettier.
- `npm run lint:eslint`: Lints JavaScript and Astro files with ESLint.
- `npm run lint:stylelint`: Lints CSS and style blocks in Astro files with Stylelint.

## 📦 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components
│   │   └── seo/        # SEO related components
│   ├── config/         # Site configuration
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components
│   ├── scripts/        # JavaScript files
│   └── styles/         # CSS files
└── package.json        # Project dependencies
```

## 🖼️ Icons

This template uses [Astro Icon](https://github.com/natemoo-re/astro-icon) for icons, which provides access to popular icon sets like Material Design Icons.

To use an icon:

```astro
<Icon name="mdi:account" class="h-6 w-6" style="color: var(--color-primary);" />
```

Notice how you can apply the global CSS variables to your icons for consistent coloring.

## 🏗️ Adding New Pages

1. Create a new file in `src/pages/` with the `.astro` extension
2. Use the Layout component and add your content
3. Update the navigation config if needed
4. Utilize global CSS variables for consistent styling

### Styling Best Practices

When styling new components or pages:

- Access color values with `var(--color-primary)`, `var(--color-secondary)`, etc.
- Use spacing variables like `var(--space-4)` or the `.section-padding` utility class
- Apply border radius with `var(--radius-lg)` or other radius variables
- Use shadow variables like `var(--shadow-sm)` for consistent elevation
- Apply transitions with `var(--transition-normal)` for smooth animations

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Iconify](https://iconify.design/)
