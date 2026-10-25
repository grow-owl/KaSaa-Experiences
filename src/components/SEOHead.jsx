import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '',
  noIndex = false,
}) {
  const location = useLocation();
  const fullPath = canonicalPath || location.pathname;
  const canonicalUrl = `${siteConfig.siteUrl}${fullPath === '/' ? '' : fullPath}`;
  const pageTitle = title
    ? `${title} | ${siteConfig.businessName}`
    : `${siteConfig.businessName} | Pottery, Painting & Creative Experiences in Siliguri`;
  const metaDesc = description || siteConfig.shortDescription;
  const socialImage = ogImage || `${siteConfig.siteUrl}/images/wheel-pottery-real.jpg`;

  useEffect(() => {
    // 1. Update document title
    document.title = pageTitle;

    // 2. Helper to set or create meta tag
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to update link tag
    const setLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Primary Meta
    setMeta('description', metaDesc);
    if (noIndex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      setMeta('robots', 'index, follow');
    }

    // Canonical link
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('og:title', pageTitle, true);
    setMeta('og:description', metaDesc, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', siteConfig.businessName, true);
    setMeta('og:image', socialImage, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', metaDesc);
    setMeta('twitter:image', socialImage);

    // 4. Inject JSON-LD Schema (LocalBusiness)
    let schemaScript = document.getElementById('kasaa-jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'kasaa-jsonld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteConfig.businessName,
      description: siteConfig.shortDescription,
      url: siteConfig.siteUrl,
      image: `${siteConfig.siteUrl}/images/wheel-pottery-real.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.location.fullAddress,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        addressCountry: 'IN',
      },
      telephone: siteConfig.contact.phone || undefined,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '11:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        siteConfig.social.instagram,
      ].filter(Boolean),
    };

    // Include breadcrumb schema for subpages
    if (fullPath !== '/' && title) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      };
      schemaScript.textContent = JSON.stringify([localBusinessSchema, breadcrumbSchema]);
    } else {
      schemaScript.textContent = JSON.stringify(localBusinessSchema);
    }
  }, [pageTitle, metaDesc, canonicalUrl, noIndex, ogType, socialImage, fullPath, title]);

  return null;
}
