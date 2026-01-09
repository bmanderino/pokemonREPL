import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import type { State } from './state.js';

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(" ").filter((word) => word !== "")
}
export function startREPL(state: State) {
  const rl = state.rl
  const commands = state.commands
  rl.prompt()
  rl.on("line", (text:string) => {
    const cleanText = cleanInput(text)
    if (cleanText.length === 0) {
      state.rl.prompt()
    } else {
      const command = cleanText[0]
      if (commands[command]) {
        commands[command].callback(state)
      } else {
        console.log("Unknown command")
      }
      state.rl.prompt()
    }
  })
}


