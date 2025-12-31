import ResourceCard from './ResourceCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Resource } from '../types';

interface ResourceGridProps {
  resources: Resource[];
  onClearFilters: () => void;
}

const ResourceGrid = ({ resources, onClearFilters }: ResourceGridProps) => {
  if (resources.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No resources found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ResourceCard resource={item} />
        </div>
      ))}
    </div>
  );
};

export default ResourceGrid;

