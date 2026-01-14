import type { CLICommand } from './state';
import { commandExit } from './commands/command_exit.js';
import { commandHelp } from './commands/command_help.js';
import { commandMap, commandMapBack } from './commands/command_map.js';
import { commandExplore } from './commands/command_explore.js';
import { commandCatch } from './commands/command_catch.js';
import { commandInspect } from './commands/command_inspect.js';

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
    },
    catch: {
      name: "catch",
      description: "Catch a pokemon in your pokeball",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "Display details on a pokemon in your pokedex",
      callback: commandInspect
    }
  };
}