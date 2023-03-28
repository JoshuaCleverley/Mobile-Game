import { ascensionUpgrades } from '../GameData/AscensionUpgrades'
import { generators } from '../GameData/Generators'
import { upgrades } from '../GameData/Upgrades'

// Types for game data that will be stored on the device
export type GameDataStored = {
  money: number
  ascensionCurrency: number
  generators: typeof generators
  upgrades: typeof upgrades
  ascensionUpgrades: typeof ascensionUpgrades
}
