export const upgrades = [
  {
    name: 'Upgrade One',
    price: 100,
    moneyMultiplier: 0.1,
    generators: [] as number[], // Which generators are affected by this multiplier. If empty affects all unless click is set to true
    click: false, // If this multiplier affects clicking then set this true, it won't affect generators unless added to generators array
    bought: false,
  },
]
