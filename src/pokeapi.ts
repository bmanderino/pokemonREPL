import { Cache } from "./pokecache.js";
const CACHE_INTERVAL = 3000
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor() {
    this.cache = new Cache(CACHE_INTERVAL)
  }

  closeCache() {
    this.cache.stopReapLoop();
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`

    const cached = this.cache.get<ShallowLocations>(url)
    if (cached) {
      return cached!
    }
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      const res = await response.json() as ShallowLocations
      this.cache.add(url, res)
      return res
    } catch(err) {
      throw new Error(`Error fetching locations: ${(err as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`
    const cached = this.cache.get<Location>(url);

    if (cached) {
      return cached;
    }


    const response = await fetch(url)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const res = await response.json() as Location
      this.cache.add(url, res)
      return res
    } catch(err) {
      throw new Error(`Error fetching location: ${(err as Error).message}`);
    }
  }
}

export type ShallowResult = {
  name: string,
  url: string
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null
  results: ShallowResult[]
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};
