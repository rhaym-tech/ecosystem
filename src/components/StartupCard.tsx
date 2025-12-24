import { ExternalLink, Linkedin, Calendar } from 'lucide-react';
import type { Startup, Category } from '@/types';

interface StartupCardProps {
  startup: Startup;
  category: Category | undefined;
}

const StartupCard = ({ startup, category }: StartupCardProps) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${startup.website}&sz=64`;

  return (
    <article className="group relative bg-card rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      {/* Header: Logo + Name + External Link */}
      <div className="flex items-start gap-4 mb-5">
        {/* Logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 flex items-center justify-center overflow-hidden border border-border/40 shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <img
            src={faviconUrl}
            alt={`${startup.name} logo`}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-lg font-bold text-primary">${startup.name.charAt(0).toUpperCase()}</span>`;
              }
            }}
          />
        </div>

        {/* Name & Category */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-card-foreground truncate mb-1 group-hover:text-primary transition-colors duration-300">
            {startup.name}
          </h3>
          {category && (
            <p className="text-sm font-medium text-primary/80">{category.name}</p>
          )}
        </div>

        {/* External Link */}
        <a
          href={startup.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group-hover:scale-110"
          aria-label={`Visit ${startup.name} website`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between pt-5 border-t border-border/40">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Founded</p>
            <p className="text-sm font-semibold text-foreground">{startup.foundedYear}</p>
          </div>
        </div>
        
        {startup.linkedin && (
          <a
            href={startup.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default StartupCard;
