import type { State } from './state.js';

export async function startREPL(state: State) {
  const rl = state.readline
  const commands = state.commands

  rl.prompt()
  rl.on("line", async (text:string) => {
    const words = cleanInput(text)
    if (words.length === 0) {
      rl.prompt()
      return
    }

    const command = words[0]
    const args = words.slice(1);

    if (!commands[command]) {
      console.log("Unknown command. Type 'help' for a list of commands.")
      rl.prompt()
      return
    }

    try {
        await commands[command].callback(state, ...args)
    } catch (err) {
      console.log(err)
    }
    rl.prompt()
  })
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(" ").filter((word) => word !== "")
}