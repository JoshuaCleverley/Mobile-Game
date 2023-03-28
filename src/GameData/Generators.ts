// Generator type definition
export type Generator = {
  id: number // Generator ID
  name: string // Generator name
  price: number // Price to buy generator
  generates: number // Money generated per second
  count: number // Number of generators bought
}

// A list of generators (things that generate money)
export const generators: Generator[] = [
  {
    id: 0,
    name: 'Generator One',
    price: 5,
    generates: 0.01,
    count: 0,
  },
  {
    id: 1,
    name: 'Generator Two',
    price: 10,
    generates: 0.05,
    count: 0,
  },
  {
    id: 2,
    name: 'Generator Three',
    price: 20,
    generates: 0.1,
    count: 0,
  },
  {
    id: 3,
    name: 'Generator Four',
    price: 35,
    generates: 0.2,
    count: 0,
  },
  {
    id: 4,
    name: 'Generator Five',
    price: 80,
    generates: 0.5,
    count: 0,
  },
]
