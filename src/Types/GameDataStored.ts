import { ascensionUpgrades } from '../GameData/AscensionUpgrades'
import { generators } from '../GameData/Generators'
import { upgrades } from '../GameData/Upgrades'

export type GameDataStored = {
  money: number
  ascensionCurrency: number
  generators: typeof generators
  upgrades: typeof upgrades
  ascensionUpgrades: typeof ascensionUpgrades
}
