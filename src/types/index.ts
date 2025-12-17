export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  icon: string;
  image_url?: string;
  created_at: string;
}

export interface Photo {
  id: string;
  title?: string;
  description?: string;
  url: string;
  category: 'mario' | 'alba' | 'dani' | 'nosotros';
  year?: number;
  created_at: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
}