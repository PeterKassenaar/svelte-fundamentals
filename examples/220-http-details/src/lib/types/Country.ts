export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: Record<string, { official: string; common: string }>;
    };
    capital: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    population: number;
    region: string;
    borders?: string[];
    continents: string[];
}
