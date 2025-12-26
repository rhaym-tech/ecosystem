import JobCard from './JobCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Job } from '../types';

interface JobGridProps {
  jobs: Job[];
  onClearFilters: () => void;
}

const JobGrid = ({ jobs, onClearFilters }: JobGridProps) => {
  if (jobs.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No job portals found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
        <div
          key={job.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobGrid;

