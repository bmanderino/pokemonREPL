import type { State } from "../state"

export async function commandExplore(state: State, ...args: string[]) {
  if (!args) {
    throw new Error("Missing location name")
  }
  const response = await state.pokeAPI.fetchLocation(args[0])
  const results = response.pokemon_encounters

  console.log(`Exploring ${args[0]}...`)
  console.log("Found Pokemon:")

  for (const result of results) {
    console.log(` - ${result.pokemon.name}`)
  }
}