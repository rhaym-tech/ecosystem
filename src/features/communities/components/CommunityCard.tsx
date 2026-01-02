import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Community } from '../types';

interface CommunityCardProps {
  community: Community;
}

const CommunityCard = ({ community }: CommunityCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const domain = new URL(community.url).hostname.replace(/^www\./, '');
  const faviconUrl = `https://fetchfavicon.com/i/${domain}?size=64`;

  const needsTruncation = community.description.length > 150;

  return (
    <article className="group relative bg-card rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-5">
        {imageError ? (
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-secondary/40 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{community.name.charAt(0).toUpperCase()}</span>
          </div>
        ) : (
          <img
            src={faviconUrl}
            alt={`${community.name} logo`}
            className="flex-shrink-0 w-10 h-10 rounded-xl object-contain"
            onError={() => setImageError(true)}
          />
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-card-foreground truncate mb-1 group-hover:text-primary transition-colors duration-300">
            {community.name}
          </h3>
          <p className={`text-sm text-muted-foreground ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {community.description}
          </p>
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors inline-block"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>

        <a
          href={community.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group-hover:scale-110"
          aria-label={`Visit ${community.name}`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default CommunityCard;

