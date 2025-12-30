import CommunityCard from './CommunityCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Community } from '../types';

interface CommunityGridProps {
  communities: Community[];
  onClearFilters: () => void;
}

const CommunityGrid = ({ communities, onClearFilters }: CommunityGridProps) => {
  if (communities.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No communities found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {communities.map((community, index) => (
        <div
          key={`${community.name}-${index}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CommunityCard community={community} />
        </div>
      ))}
    </div>
  );
};

export default CommunityGrid;

