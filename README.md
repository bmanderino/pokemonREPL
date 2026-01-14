# Pokedex TS-REPL

A TypeScript-based command-line Pokedex REPL that lets you explore Pokemon locations, catch Pokemon, and build your own Pokedex using the [PokeAPI](https://pokeapi.co/).

## ✨ Features

- 🎮 Interactive command-line interface with REPL
- 🗺️ Browse Pokemon location areas with pagination
- 🔍 Explore specific locations to discover Pokemon
- 🎯 Catch Pokemon with probability-based mechanics
- 📖 View your personal Pokedex collection
- 🔎 Inspect detailed Pokemon stats
- 💾 Smart caching layer for improved performance (5-minute cache)
- 🚀 Built with TypeScript and modern ESNext modules

## 📋 Prerequisites

- Node.js 22.15.0 or higher (specified in `.nvmrc`)

## 🚀 Quickstart

```bash
# Install dependencies
npm install

# Build and run
npm run dev
```

## 🎮 Available Commands

Once the REPL starts (you'll see the `Pokedex >` prompt), you can use:

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `map` | Get the next page of Pokemon locations |
| `mapb` | Get the previous page of locations |
| `explore <location>` | Explore a location to see what Pokemon are there |
| `catch <pokemon>` | Attempt to catch a Pokemon (difficulty based on base experience) |
| `pokedex` | View all Pokemon you've caught |
| `inspect <pokemon>` | View detailed stats for a caught Pokemon |
| `exit` | Exit the Pokedex |

### Example Session

```
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
...

Pokedex > explore eterna-city-area
Exploring eterna-city-area...
Found Pokemon:
 - beautifly
 - dustox
 - ponyta

Pokedex > catch ponyta
Throwing a Pokeball at ponyta...
ponyta was caught!

Pokedex > pokedex
Your Pokedex:
 - ponyta

Pokedex > inspect ponyta
Name: ponyta
Height: 10
Weight: 300
Stats:
  -hp: 50
  -attack: 85
  ...
```

## ⚙️ Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Build and run in development mode
- `npm test` - Run tests with Vitest

## 📁 Project Structure

```
src/
├── commands/
│   ├── command_catch.ts    # Pokemon catching with probability mechanics
│   ├── command_exit.ts     # Exit command
│   ├── command_explore.ts  # Location exploration
│   ├── command_help.ts     # Help command
│   ├── command_inspect.ts  # Pokemon detail inspection
│   ├── command_map.ts      # Map navigation (next/previous)
│   └── command_pokedex.ts  # Pokedex display
├── main.ts                 # Application entry point
├── repl.ts                 # REPL implementation and input handling
├── repl.test.ts            # REPL tests
├── state.ts                # Application state management
├── pokeapi.ts              # PokeAPI client with caching
├── pokecache.ts            # Caching layer for API responses
├── cache.test.ts           # Cache tests
└── getCommand.ts           # Command registry
```

## 🛠️ Tech Stack

- TypeScript
- Node.js
- Vitest (testing)
- PokeAPI (data source)

## 📄 License

ISC
