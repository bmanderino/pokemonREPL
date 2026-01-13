import type { State } from "../state"

export async function commandCatch(state: State, ...args: string[]) {
  if (!args) {
    throw new Error("Missing location name")
  }
  const pokemonName: string = args[0]
  const response = await state.pokeAPI.fetchPokemon(pokemonName)

  console.log(`Throwing a Pokeball at ${pokemonName}...`)

  const baseExp = response.base_experience

  if (attemptCatch(baseExp)) {
    state.pokedex[pokemonName] = response
    console.log(`${pokemonName} was caught!`)
  } else {
    console.log(`${pokemonName} escaped!`)
  }
}

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

type CatchTuning = {
  minExp?: number;
  capExp?: number;
  maxChance?: number;
  minChance?: number;
  curve?: number;
};

export function attemptCatch(baseExp: number, t: CatchTuning = {}): boolean {
  const {
    minExp = 36,
    capExp = 200,
    maxChance = 0.80,
    minChance = 0.15,
    curve = 1.3,
  } = t;

  const x = clamp01((baseExp - minExp) / (capExp - minExp)); // 0..1
  const difficulty = Math.pow(x, curve);                     // curved ramp
  const chance = maxChance - difficulty * (maxChance - minChance);

  return Math.random() < chance;
}

