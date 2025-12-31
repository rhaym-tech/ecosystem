import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Extract domain from URL for favicon
  let domain = '';
  if (resource.url) {
    try {
      const url = new URL(resource.url.startsWith('http') ? resource.url : `https://${resource.url}`);
      domain = url.hostname.replace(/^www\./, '');
    } catch {
      // If URL parsing fails, try simple string replacement
      domain = resource.url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '').split('/')[0];
    }
  }
  
  const faviconUrl = domain ? `https://fetchfavicon.com/i/${domain}?size=64` : '';
  
  // Check if description is long enough to need truncation (approximately 150 characters for 3 lines)
  const needsTruncation = resource.description.length > 150;
  const displayDescription = isExpanded || !needsTruncation 
    ? resource.description 
    : resource.description.substring(0, 150);

  return (
    <article className="group relative bg-card rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-5">
        {imageError || !faviconUrl ? (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{resource.name.charAt(0).toUpperCase()}</span>
          </div>
        ) : (
          <img
            src={faviconUrl}
            alt={`${resource.name} logo`}
            className="flex-shrink-0 w-12 h-12 rounded-xl object-contain"
            onError={() => setImageError(true)}
          />
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg text-card-foreground truncate group-hover:text-primary transition-colors duration-300">
              {resource.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {displayDescription}
            {needsTruncation && !isExpanded && '... '}
            {needsTruncation && isExpanded && ' '}
            {needsTruncation && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-primary hover:text-primary/80 font-medium transition-colors inline"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </p>
        </div>

        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group-hover:scale-110"
          aria-label={`Visit ${resource.name}`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default ResourceCard;

