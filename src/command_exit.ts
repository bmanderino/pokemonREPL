import type { State } from './state';
import { exit } from 'node:process';

export function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!")
  state.rl.close()
  exit(0)
}