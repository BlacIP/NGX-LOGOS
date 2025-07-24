export interface Logo {
  id: string;
  name: string;
  category: string;
  description?: string;
  pngUrl: string;
  svgUrl: string;
  downloadUrls: {
    png250: string;
    png500: string;
    png1000: string;
    svg: string;
  };
  tags: string[];
  featured?: boolean;
}

export interface LogoCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}