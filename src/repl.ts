import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(" ").filter((word) => word !== "")
}
export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > "
  });
  rl.prompt()
  rl.on("line", (text:string) => {
    const cleanText = cleanInput(text)
    if (cleanText.length === 0) {
      rl.prompt()
    } else {
      console.log(`Your command was: ${cleanText[0]}`)
      rl.prompt()
    }
  })
}


