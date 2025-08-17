export type ResourceKind = 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

export interface SwapiListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  url: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}

export interface Species {
  name: string;
  classification: string;
  language: string;
  average_lifespan: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  starship_class: string;
  crew: string;
  passengers: string;
  url: string;
}

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  vehicle_class: string;
  crew: string;
  passengers: string;
  url: string;
}

export type ResourceMap = {
  people: Person;
  planets: Planet;
  species: Species;
  starships: Starship;
  vehicles: Vehicle;
};
