import * as React from 'react'
import { Generator, generators } from '../GameData/Generators'
import { Upgrade, upgrades } from '../GameData/Upgrades'
import {
  AscensionUpgrade,
  ascensionUpgrades,
} from '../GameData/AscensionUpgrades'

// Context to store game data
export const GameContext = React.createContext({
  money: 0,
  ascensionCurrency: 0,
  generators: generators,
  upgrades: upgrades,
  ascensionUpgrades: ascensionUpgrades,

  setMoney: (value: number) => {},
  setAscensionCurrency: (value: number) => {},
  setGenerators: (value: Generator[]) => {},
  setUpgrades: (value: Upgrade[]) => {},
  setAscensionUpgrades: (value: AscensionUpgrade[]) => {},
})
