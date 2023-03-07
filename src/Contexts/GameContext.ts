import * as React from 'react'
import { generators } from '../GameData/Generators'
import { upgrades } from '../GameData/Upgrades'
import { ascensionUpgrades } from '../GameData/AscensionUpgrades'

// Context to store game data
export const GameContext = React.createContext({
  money: 0,
  ascensionCurrency: 0,
  generators: generators,
  upgrades: upgrades,
  ascensionUpgrades: ascensionUpgrades,

  setMoney: (value: number) => {},
  setAscensionCurrency: (value: number) => {},
  setGenerators: (value: typeof generators) => {},
  setUpgrades: (value: typeof upgrades) => {},
  setAscensionUpgrades: (value: typeof ascensionUpgrades) => {},
})
