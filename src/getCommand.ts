import type { CLICommand } from './state';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/command_help.js';
import { commandMap, commandMapBack } from './commands/command_map.js';
import { commandExplore } from './commands/command_explore.js';

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack
    },
    explore: {
      name : "explore",
      description: "Explore details about a chosen location",
      callback: commandExplore
    }

  };
}