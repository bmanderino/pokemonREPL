export type CacheEntry<T> = {
  createdAt: number,
  val: T
}

export class Cache {
  #cache = new Map<string, CacheEntry<any>>()
  #reapIntervalID: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval
    this.#startReapLoop()
  }

  add<T>(key: string, val: T): void {
    this.#cache.set(key, { createdAt: Date.now(), val })
  }

  get<T>(key: string): T | undefined {
    return this.#cache.get(key)?.val
  }

  #reap(): void {
    this.#cache.forEach((val, key) => {
      if (val.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key)
      }
    })
  }

  #startReapLoop(): void {
    this.#reapIntervalID = setInterval(() => {
      this.#reap()
    }, this.#interval)
  }

  stopReapLoop(): void {
    if (this.#reapIntervalID) {
      clearInterval(this.#reapIntervalID);
      this.#reapIntervalID = undefined;
    }
  }
}