# Pokedexts

A TypeScript-based command-line Pokedex REPL that interacts with the PokeAPI to browse Pokemon locations.

## ✨ Features

- Interactive command-line interface with REPL
- Browse Pokemon location areas with pagination
- Fetches data from [PokeAPI](https://pokeapi.co/)
- Built with TypeScript and modern ESNext modules
- Caching layer for improved performance

## 📋 Prerequisites

- Node.js 22.15.0 or higher (specified in `.nvmrc`)

## 🚀 Quickstart

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run the application
npm start

# Or build and run in one step
npm run dev
```

## 🎮 Available Commands

Once the REPL starts, you can use the following commands:

- `help` - Displays available commands
- `map` - Get the next page of Pokemon locations
- `mapb` - Get the previous page of locations
- `exit` - Exit the Pokedex

## ⚙️ Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Build and run in development mode
- `npm test` - Run tests with Vitest

## 📁 Project Structure

```
src/
├── commands/
│   ├── command_exit.ts   # Exit command
│   ├── command_help.ts   # Help command
│   └── command_map.ts    # Map navigation commands
├── main.ts               # Application entry point
├── repl.ts               # REPL implementation and input handling
├── repl.test.ts          # REPL tests
├── state.ts              # Application state management
├── pokeapi.ts            # PokeAPI client with location fetching
├── pokecache.ts          # Caching layer for API responses
└── getCommand.ts         # Command registry
```

## 🛠️ Tech Stack

- TypeScript
- Node.js
- Vitest (testing)
- PokeAPI (data source)

## 📄 License

ISC
