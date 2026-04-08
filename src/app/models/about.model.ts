export interface AboutData {
  sectionLabel: string;
  paragraphs: string[];
  visualType: 'image' | 'code' | 'stats';
  visual: {
    // For image type
    imageUrl?: string;
    imageAlt?: string;
    
    // For code type
    code?: {
      language: string;
      snippet: string;
    };
    
    // For stats type
    stats?: Array<{
      value: string;
      label: string;
    }>;
  };
}
