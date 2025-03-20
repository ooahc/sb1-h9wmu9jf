export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  rating: number;
  url: string;
  category: string;
}

export type ViewMode = 'grid' | 'list';
export type SortOption = 'name' | 'rating' | 'newest';