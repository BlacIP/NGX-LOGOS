export interface Logo {
  id: string;
  name: string;
  category: string;
  description?: string;
  pngUrl: string;
  svgUrl: string;
  tags: string[];
  featured?: boolean;
}

export interface LogoCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}