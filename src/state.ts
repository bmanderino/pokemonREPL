import { createInterface, type Interface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./getCommand.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {
  readline: Interface,
  commands: Record<string, CLICommand>,
  pokeAPI: PokeAPI,
  nextLocationsURL?: string,
  prevLocationsURL?: string
}

export function initState(): State {
  return {
    readline: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > "
    }),
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: "",
    prevLocationsURL: ""
  }
}