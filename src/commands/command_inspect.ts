import type { State } from "../state"

export async function commandInspect(state: State, ...args: string[]) {
  if (!args) {
    throw new Error("Missing pokemon name")
  }
  const pokemonName: string = args[0]
  const pokemon = state.pokedex[pokemonName]

  if (!pokemon) {
    console.log(`You have not captured this pokemon yet.`)
  } else {
    console.log(`Name: ${pokemon.name}`)
    console.log(`Height: ${pokemon.height}`)
    console.log(`Weight: ${pokemon.weight}`)
    console.log(`Stats:`)
    for (const stat of pokemon.stats) {
      console.log(`  -${stat.stat.name}: ${stat.base_stat}`)
    }
    console.log(`Types:`)
    for (const type of pokemon.types) {
      console.log(`  -${type.type.name}`)
    }
  }
}
