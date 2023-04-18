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
    name: 'Ascension Generator One',
    description: 'Double production from Generator One',
    price: 100,
    moneyMultiplier: 2,
    generators: [0],
    click: false,
    owned: false,
  },
]
