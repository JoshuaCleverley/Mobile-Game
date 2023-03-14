export type Generator = {
  name: string // Generator name
  price: number // Price to buy generator
  generates: number // Money generated per second
  count: number // Number of generators bought
}

// A list of generators (things that generate money)
export const generators: Generator[] = [
  {
    name: 'Generator One',
    price: 50,
    generates: 0.1,
    count: 0,
  },
  {
    name: 'Generator Two',
    price: 100,
    generates: 0.5,
    count: 0,
  },
  {
    name: 'Generator Three',
    price: 300,
    generates: 1,
    count: 0,
  },
  {
    name: 'Generator Four',
    price: 550,
    generates: 3,
    count: 0,
  },
  {
    name: 'Generator Five',
    price: 1000,
    generates: 10,
    count: 0,
  },
]
