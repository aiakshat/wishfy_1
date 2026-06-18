import { useEffect } from 'react';

export default function useSEO({ title, description, schema }) {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = `${title} | Wishfy Greens`;
    } else {
      document.title = 'Wishfy Greens | Premium Landscaping & Green Infrastructure';
    }

    // 2. Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription.setAttribute('content', 'Wishfy Greens landscaping, horticulture, greenhouse, and smart landscape operations across India and UAE.');
    }

    // 3. Handle JSON-LD Schema markup injection
    let schemaScript = document.getElementById('jsonld-schema');
    if (schemaScript) {
      schemaScript.remove();
    }
    if (schema) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-schema';
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup on unmount or transition
    return () => {
      const scriptToRemove = document.getElementById('jsonld-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, schema]);
}
