import { Rocket, Building2, Users, Radio, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title?: string;
  description?: string;
}

const Header = ({ 
  title = "Algerian Startups Directory",
  description = "Discover the vibrant startup ecosystem of Algeria. Explore innovative companies shaping the future across technology, finance, and beyond."
}: HeaderProps) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Startups', icon: Rocket },
    { path: '/incubators', label: 'Incubators', icon: Building2 },
    { path: '/coworking-spaces', label: 'Co-Working Spaces', icon: Users },
    { path: '/media', label: 'Media', icon: Radio },
    { path: '/jobs', label: 'Jobs', icon: Briefcase },
  ];

  return (
    <header className="text-center py-12 md:py-16">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground mb-6">
        <Rocket className="w-7 h-7" />
      </div>
      
      {/* Navigation */}
      <nav className="flex justify-center gap-2 mb-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
        {title}
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default Header;

