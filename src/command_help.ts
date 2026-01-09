import type { State } from "./state"

export function commandHelp(state: State) {
  const commands = state.commands
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n")

  for (const i in commands) {
    console.log(`${commands[i].name}: ${commands[i].description}`)
  }
}