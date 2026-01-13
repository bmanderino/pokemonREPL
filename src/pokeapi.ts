import { Cache } from "./pokecache.js";
const CACHE_INTERVAL = 5 * 60 * 1000; // 5 minutes
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

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`
    const cached = this.cache.get<Pokemon>(url);

    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const res = await response.json() as Pokemon
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

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    }
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    }
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    location_area_encounters: string;
  }[];
  moves: {
    move: {
      name: string;
      url: string
    };
    version_group_details: any[]
  }[];
  species: {
    name: string;
    url: string
  };
  sprites: {
    name: string;
    url: string;
  };
  cries: {
    latest: string;
    legacy: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  past_types: {
    generation: {
      name: string;
      url: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }[];
  }[];
  past_abilities: {
    generation: {
      name: string;
      url: string;
    };
    abilites: {
      ability: null;
      is_hidden: true;
      slot: number
    }[];
  }[];
}