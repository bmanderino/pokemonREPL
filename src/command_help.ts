import type { State } from "./state"

export async function commandHelp(state: State) {
  const commands = state.commands
  console.log("Welcome to the Pokedex!")
  console.log("Usage:\n")

  for (const command of Object.values(commands)) {
    console.log(`${command.name}: ${command.description}`)
  }
  console.log()
}