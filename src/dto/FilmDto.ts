export interface FilmDto {
    id: number;
    title: string;
    episode_id: number;
    director: string;
    producer: string;
    release_date: string;
    opening_crawl: string;
    characters: number[];
    planets: number[];
    species: number[];
    starships: number[];
    vehicles: number[];
    created: string;
    edited: string;
}
