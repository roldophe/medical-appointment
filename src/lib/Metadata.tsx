import React from 'react';
import { Helmet } from 'react-helmet-async';

// Define types for the props
interface MetadataProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  thumbnail?: string;
  url?: string;
  type?: string;
}

const Metadata: React.FC<MetadataProps> = ({
  title,
  description,
  author,
  keywords,
  thumbnail,
  url,
  type = 'website', // Default to 'website'
}) => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph Meta Tags */}
      {thumbnail && <meta property="og:image" content={thumbnail} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

export default Metadata;
