import type { State } from "./state"

export async function commandMap(state: State) {
  const response = await state.pokeAPI.fetchLocations(state.nextLocationsURL)
  const results = response.results

  state.nextLocationsURL = response.next ?? undefined
  state.prevLocationsURL = response.previous ?? undefined

  for (const result of results) {
    console.log(result.name)
  }
}

export async function commandMapBack(state: State) {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page")
    return
  }

  const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL)
  const results = response.results

  state.nextLocationsURL = response.next ?? undefined
  state.prevLocationsURL = response.previous ?? undefined

  for (const result of results) {
    console.log(result.name)
  }
}