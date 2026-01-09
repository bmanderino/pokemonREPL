import { createInterface, type Interface } from "readline";
import { stdin, stdout } from 'node:process';
import { getCommands } from "./getCommand.js";
import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
}

export type State = {
  rl: Interface,
  commands: Record<string, CLICommand>
}

export function initState(): State {
  return {
    rl: createInterface({
      input: stdin,
      output: stdout,
      prompt: "Pokedex > "
    }),
    commands: getCommands()
  }
}