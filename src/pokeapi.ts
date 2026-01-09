export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      return await response.json() as ShallowLocations
    } catch(err) {
      throw new Error(`Error fetching locations: ${(err as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`

    const response = await fetch(url)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      return await response.json() as Location
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
  // add properties here
};