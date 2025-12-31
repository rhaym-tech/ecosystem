export interface Category {
  id: string;
  name: string;
}

export interface Startup {
  name: string;
  foundedYear: number;
  categoryIds: string[];
  website?: string;
  linkedin?: string;
}

