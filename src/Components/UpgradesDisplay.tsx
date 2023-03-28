import { View, Text, Button } from 'react-native'
import { styles } from '../Style/Styles'
import { colors } from '../Style/Colors'
import { useForceUpdate } from '../hooks/UseForceUpdate'
import { GameContext } from '../Contexts/GameContext'
import { useContext } from 'react'
import { formatCurrency } from '../Utils/Formatting'
import { Upgrade } from '../GameData/Upgrades'

type Props = {
  upgrade: Upgrade
  isDarkMode: boolean
}

export function UpgradesDisplay({ upgrade, isDarkMode }: Props) {
  let forceUpdate = useForceUpdate()
  let { money, upgrades, setMoney, setUpgrades } = useContext(GameContext)

  const Buy = () => {
    const cost = upgrade.price

    if (cost <= money) {
      let ups = upgrades
      ups[upgrade.id].owned = true
      setUpgrades(ups)
      setMoney(money - cost)
      forceUpdate()
    }
  }

  return (
    <View style={[styles.upgradeDisplay]}>
      <Text
        style={[
          styles.upgradeText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        {upgrade.name}
        {upgrade.owned ? ' (Owned)' : ''}
      </Text>
      <Text
        style={[
          styles.upgradeText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        {upgrade.description}
      </Text>
      {upgrade.owned ? (
        ''
      ) : (
        <>
          <Text
            style={[
              styles.generatorText,
              {
                color: isDarkMode ? colors.text.dark : colors.text.light,
              },
            ]}>
            Cost: {formatCurrency(upgrade.price)}
          </Text>

          <View style={[styles.generatorButtonContainer]}>
            <Text
              style={[
                styles.generatorText,
                {
                  color: isDarkMode ? colors.text.dark : colors.text.light,
                },
              ]}>
              Buy:
            </Text>
            <Button
              color={isDarkMode ? colors.active.dark : colors.active.light}
              title="Buy"
              onPress={() => {
                Buy()
              }}
            />
          </View>
        </>
      )}
    </View>
  )
}
