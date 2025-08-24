import React, { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'synapBiz - API de ressources de marque',
  description = 'synapBiz est l\'API de référence pour récupérer instantanément les logos, couleurs et informations de n\'importe quelle entreprise. Accélérez votre développement avec notre API puissante.',
  keywords = 'API, marque, logo, couleur, entreprise, développement, synapBiz, ressources de marque'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Update meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.setAttribute('content', 'synapBiz');
    
  }, [title, description, keywords]);

  return null; // This component doesn't render anything
};

export default MetaTags;
