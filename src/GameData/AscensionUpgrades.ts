// AscensionUpgrade type definition
export type AscensionUpgrade = {
  id: number // Unique ID of upgrade
  name: string // Name of upgrade
  description: string // Description of upgrade
  price: number // Price to buy upgrade
  moneyMultiplier: number // Number to multiply click or money/s of generator by
  generators: number[] // Which generators are affected by this multiplier. If empty affects all unless click is set to true
  click: boolean // If this multiplier affects clicking then set this true, it won't affect generators unless added to generators array
  owned: boolean // Is the upgrade bought yet
}

// List of ascension upgrades (better versions of upgrades)
export const ascensionUpgrades: AscensionUpgrade[] = [
  {
    id: 0,
    name: 'Upgrade Clicks',
    description: '50x production from clicking',
    price: 100,
    moneyMultiplier: 100,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 1,
    name: 'Upgrade Ice Cream',
    description: '100x production from Ice Cream Stand',
    price: 1000,
    moneyMultiplier: 100,
    generators: [0],
    click: false,
    owned: false,
  },
  {
    id: 2,
    name: 'Upgrade Car Wash',
    description: '100x production from Car Wash',
    price: 1000,
    moneyMultiplier: 100,
    generators: [1],
    click: false,
    owned: false,
  },
  {
    id: 3,
    name: 'Upgrade Cleaning Company',
    description: '100x production from Cleaning Company',
    price: 1000,
    moneyMultiplier: 100,
    generators: [2],
    click: false,
    owned: false,
  },
  {
    id: 4,
    name: 'Upgrade Coffee Shop',
    description: '100x production from Coffee Shop',
    price: 1000,
    moneyMultiplier: 100,
    generators: [3],
    click: false,
    owned: false,
  },
  {
    id: 5,
    name: 'Upgrade Restaurants',
    description: '100x production from Restaurant',
    price: 1000,
    moneyMultiplier: 100,
    generators: [4],
    click: false,
    owned: false,
  },
  {
    id: 6,
    name: 'Upgrade Fast Food Chains',
    description: '100x production from Fast Food Chain',
    price: 1000,
    moneyMultiplier: 100,
    generators: [5],
    click: false,
    owned: false,
  },
  {
    id: 7,
    name: 'Upgrade Banks',
    description: '100x production from Bank',
    price: 1000,
    moneyMultiplier: 100,
    generators: [6],
    click: false,
    owned: false,
  },
  {
    id: 8,
    name: 'Upgrade Oil Companies',
    description: '100x production from Oil Companies',
    price: 1000,
    moneyMultiplier: 100,
    generators: [7],
    click: false,
    owned: false,
  },
  {
    id: 9,
    name: 'Upgrade Tech Companies',
    description: '100x production from Tech Company',
    price: 1000,
    moneyMultiplier: 100,
    generators: [8],
    click: false,
    owned: false,
  },
  {
    id: 10,
    name: 'Upgrade Asteroid Mining',
    description: '100x production from Asteroid Mining Company',
    price: 1000,
    moneyMultiplier: 100,
    generators: [9],
    click: false,
    owned: false,
  },
  {
    id: 11,
    name: 'Upgrade Space Stations',
    description: '100x production from Space Station',
    price: 1000,
    moneyMultiplier: 100,
    generators: [10],
    click: false,
    owned: false,
  },
  {
    id: 12,
    name: 'Upgrade Moon Bases',
    description: '100x production from Moon Base',
    price: 1000,
    moneyMultiplier: 100,
    generators: [11],
    click: false,
    owned: false,
  },
  {
    id: 13,
    name: 'Upgrade Mars Colonies',
    description: '100x production from Mars Colony',
    price: 1000,
    moneyMultiplier: 100,
    generators: [12],
    click: false,
    owned: false,
  },
]
