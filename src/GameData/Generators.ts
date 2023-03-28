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
    price: 50,
    generates: 0.1,
    count: 0,
  },
  {
    id: 1,
    name: 'Generator Two',
    price: 100,
    generates: 0.5,
    count: 0,
  },
  {
    id: 2,
    name: 'Generator Three',
    price: 300,
    generates: 1,
    count: 0,
  },
  {
    id: 3,
    name: 'Generator Four',
    price: 550,
    generates: 3,
    count: 0,
  },
  {
    id: 4,
    name: 'Generator Five',
    price: 1000,
    generates: 10,
    count: 0,
  },
]
