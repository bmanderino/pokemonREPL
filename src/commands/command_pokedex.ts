import type { State } from "../state"

export async function commandPokedex(state: State) {
  const pokedex = state.pokedex
  const keys = Object.keys(pokedex)

  if (keys.length === 0) {
    console.log("Your Pokedex is empty. Use the 'catch' command to catch some Pokemon.")
  } else {
    console.log("Your Pokedex:")

    for (const i in keys) {
      console.log(` - ${keys[i]}`)
    }
  }
}
