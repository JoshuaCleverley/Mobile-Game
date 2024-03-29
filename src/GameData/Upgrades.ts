// Upgrade type definition
export type Upgrade = {
  id: number // Unique ID of upgrade
  name: string // Name of upgrade
  description: string // Description of upgrade
  price: number // Price to buy upgrade
  moneyMultiplier: number // Number to multiply click or money/s of generator by
  generators: number[] // Which generators are affected by this multiplier. If empty affects all unless click is set to true
  click: boolean // If this multiplier affects clicking then set this true, it won't affect generators unless added to generators array
  owned: boolean // Is the upgrade bought or not
}

// List of upgrades (modifies the amount of money made by clicking or from generators)
export const upgrades: Upgrade[] = [
  {
    id: 0,
    name: 'Double Click',
    description: 'Double value from clicking',
    price: 1,
    moneyMultiplier: 2,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 1,
    name: 'Triple Click',
    description: 'Triple value from clicking',
    price: 3,
    moneyMultiplier: 3,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 2,
    name: 'Better Ice Cream',
    description: '30% boost to Ice Cream Stand',
    price: 10,
    moneyMultiplier: 1.3,
    generators: [0],
    click: false,
    owned: false,
  },
  {
    id: 3,
    name: 'Better Car Wash',
    description: '30% boost to Car Wash',
    price: 20,
    moneyMultiplier: 1.3,
    generators: [1],
    click: false,
    owned: false,
  },
  {
    id: 4,
    name: 'Better Cleaning Company',
    description: '30% boost to Cleaning Company',
    price: 200,
    moneyMultiplier: 1.3,
    generators: [2],
    click: false,
    owned: false,
  },

  {
    id: 8,
    name: 'Massive Click',
    description: 'Money produced from clicking is mutliplied by 500',
    price: 600,
    moneyMultiplier: 500,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 5,
    name: 'Better Coffee Shop',
    description: '30% boost to Coffee Shop',
    price: 1000,
    moneyMultiplier: 1.3,
    generators: [3],
    click: false,
    owned: false,
  },
  {
    id: 6,
    name: 'Better Restaurant',
    description: '30% boost to Restaurant',
    price: 1500,
    moneyMultiplier: 1.3,
    generators: [4],
    click: false,
    owned: false,
  },
  {
    id: 7,
    name: 'Better Fast Food Chain',
    description: '30% boost to Fast Food Chain',
    price: 3000,
    moneyMultiplier: 1.3,
    generators: [5],
    click: false,
    owned: false,
  },
  {
    id: 8,
    name: 'Better Bank',
    description: '30% boost to Bank',
    price: 6000,
    moneyMultiplier: 1.3,
    generators: [6],
    click: false,
    owned: false,
  },
  {
    id: 8,
    name: 'Better Oil Company',
    description: '30% boost to Oil Company',
    price: 6000,
    moneyMultiplier: 1.3,
    generators: [7],
    click: false,
    owned: false,
  },
  {
    id: 8,
    name: 'Better Tech Company',
    description: '30% boost to Tech Company',
    price: 6000,
    moneyMultiplier: 1.3,
    generators: [8],
    click: false,
    owned: false,
  },
  {
    id: 9,
    name: 'Better Ice Cream II',
    description: '50% boost to Ice Cream Stand',
    price: 10000,
    moneyMultiplier: 1.5,
    generators: [0],
    click: false,
    owned: false,
  },
  {
    id: 10,
    name: 'Better Car Wash II',
    description: '50% boost to Car Wash',
    price: 20000,
    moneyMultiplier: 1.5,
    generators: [1],
    click: false,
    owned: false,
  },
  {
    id: 11,
    name: 'Better Cleaning Company II',
    description: '50% boost to Cleaning Company',
    price: 200000,
    moneyMultiplier: 1.5,
    generators: [2],
    click: false,
    owned: false,
  },
  {
    id: 12,
    name: 'Better Coffee Shop II',
    description: '50% boost to Coffee Shop',

    price: 1000000,
    moneyMultiplier: 1.5,
    generators: [3],
    click: false,
    owned: false,
  },
  {
    id: 13,
    name: 'Better Restaurant II',
    description: '50% boost to Restaurant',
    price: 2000000,
    moneyMultiplier: 1.5,
    generators: [4],
    click: false,
    owned: false,
  },
  {
    id: 14,
    name: 'Better Fast Food Chain II',
    description: '50% boost to Fast Food Chain',
    price: 3000000,
    moneyMultiplier: 1.5,
    generators: [5],
    click: false,
    owned: false,
  },
  {
    id: 15,
    name: 'Better Bank II',
    description: '50% boost to Bank',
    price: 6000000,
    moneyMultiplier: 1.5,
    generators: [6],
    click: false,
    owned: false,
  },

  {
    id: 8,
    name: 'Space Age',
    description: '30% boost to Space related generators',
    price: 6000,
    moneyMultiplier: 1.3,
    generators: [9, 10, 11, 12],
    click: false,
    owned: false,
  },
]
