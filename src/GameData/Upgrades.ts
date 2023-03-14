export type Upgrade = {
  name: string // Name of upgrade
  price: number // Price to buy upgrade
  moneyMultiplier: number // Number to multiply click or money/s of generator by
  generators: number[] // Which generators are affected by this multiplier. If empty affects all unless click is set to true
  click: boolean // If this multiplier affects clicking then set this true, it won't affect generators unless added to generators array
  owned: boolean // Is the upgrade bought or not
}

// List of upgrades (they modify the amount of money made by clicking or from generators)
export const upgrades: Upgrade[] = [
  {
    name: 'Upgrade One',
    price: 100,
    moneyMultiplier: 1.1,
    generators: [],
    click: false,
    owned: false,
  },
  {
    name: '',
    price: 100,
    moneyMultiplier: 1.2,
    generators: [],
    click: false,
    owned: false,
  },
]
