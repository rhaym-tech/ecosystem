import { Search, X, ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import type { Category, SortOrder } from '@/types';

interface FilterBarProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search startups..."
          className="pl-10 pr-10 h-10 bg-background border-border"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full sm:w-[160px] h-10 bg-background border-border">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select value={sortOrder} onValueChange={(value) => onSortOrderChange(value as SortOrder)}>
        <SelectTrigger className="w-full sm:w-[180px] h-10 bg-background border-border">
          <ArrowUpDown className="w-4 h-4 mr-2 text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Newest First</SelectItem>
          <SelectItem value="asc">Oldest First</SelectItem>
        </SelectContent>
      </Select>

    </div>
  );
};

export default FilterBar;
