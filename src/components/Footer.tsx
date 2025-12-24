import { Heart, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 mt-12 border-t border-border">
      <div className="text-center text-sm text-muted-foreground space-y-3">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for the Algerian startup ecosystem
        </p>
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://github.com/dz-ecosystem/startup-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Contribute on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
