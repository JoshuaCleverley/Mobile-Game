import * as React from 'react'

export const GameContext = React.createContext({
  money: 0,
  ascensionCurrency: 0,
  generators: [],
  upgrades: [],
  ascensionUpgrades: [],
})
