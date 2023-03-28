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
    name: 'Upgrade One',
    description: 'Double value from clicking',
    price: 1,
    moneyMultiplier: 2,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 1,
    name: 'Upgrade Two',
    description: 'Triple value from clicking',
    price: 3,
    moneyMultiplier: 3,
    generators: [],
    click: true,
    owned: false,
  },
  {
    id: 2,
    name: 'Upgrade Three',
    description: '20% boost to all generators',
    price: 1000,
    moneyMultiplier: 1.2,
    generators: [],
    click: false,
    owned: false,
  },
]
