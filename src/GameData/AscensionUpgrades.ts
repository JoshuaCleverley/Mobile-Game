// AscensionUpgrade type definition
export type AscensionUpgrade = {
  name: string // Name of upgrade
  price: number // Price to buy upgrade
  bought: false // Is the upgrade bought yet
}

// List of ascension upgrades (better versions of upgrades)
export const ascensionUpgrades: AscensionUpgrade[] = [
  {
    name: 'Ascension Generator One',
    price: 100, // TODO: Figure out ascension upgrades
    bought: false,
  },
]
