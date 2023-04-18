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
    name: 'Ice Cream Stand',
    price: 5,
    generates: 0.01,
    count: 0,
  },
  {
    id: 1,
    name: 'Car Wash',
    price: 10,
    generates: 0.03,
    count: 0,
  },
  {
    id: 2,
    name: 'Cleaning Company',
    price: 100,
    generates: 0.4,
    count: 0,
  },
  {
    id: 3,
    name: 'Coffee Shop',
    price: 500,
    generates: 2,
    count: 0,
  },
  {
    id: 4,
    name: 'Restaurant',
    price: 1000,
    generates: 6,
    count: 0,
  },
  {
    id: 5,
    name: 'Fast Food Chain',
    price: 1500,
    generates: 10,
    count: 0,
  },
  {
    id: 6,
    name: 'Bank',
    price: 3000,
    generates: 20,
    count: 0,
  },
  {
    id: 7,
    name: 'Oil Company',
    price: 6000,
    generates: 50,
    count: 0,
  },
  {
    id: 8,
    name: 'Tech Company',

    price: 10_000,
    generates: 200,
    count: 0,
  },
  {
    id: 9,
    name: 'Asteroid Mining Company',
    price: 25_000,
    generates: 900,
    count: 0,
  },
  {
    id: 10,
    name: 'Space Station',
    price: 50_000,
    generates: 1500,
    count: 0,
  },
  {
    id: 11,
    name: 'Moon Base',
    price: 150_000,
    generates: 5000,
    count: 0,
  },
  {
    id: 12,
    name: 'Mars Colony',
    price: 200_000,
    generates: 20_000,
    count: 0,
  },
]
