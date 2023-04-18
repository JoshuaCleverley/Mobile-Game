import { View, Text, Button } from 'react-native'
import { styles } from '../Style/Styles'
import { colors } from '../Style/Colors'
import { useForceUpdate } from '../hooks/UseForceUpdate'
import { GameContext } from '../Contexts/GameContext'
import { useContext } from 'react'
import { formatNumber } from '../Utils/Formatting'
import { AscensionUpgrade } from '../GameData/AscensionUpgrades'

type Props = {
  ascensionUpgrade: AscensionUpgrade
  isDarkMode: boolean
}

export function AscensionUpgradesDisplay({
  ascensionUpgrade,
  isDarkMode,
}: Props) {
  let forceUpdate = useForceUpdate()
  let {
    ascensionCurrency,
    ascensionUpgrades,
    setAscensionCurrency,
    setAscensionUpgrades,
  } = useContext(GameContext)

  const Buy = () => {
    // Buy an upgrade
    const cost = ascensionUpgrade.price

    if (cost <= ascensionCurrency) {
      let ups = ascensionUpgrades
      ups[ascensionUpgrade.id].owned = true
      setAscensionUpgrades(ups)
      setAscensionCurrency(ascensionCurrency - cost)
      forceUpdate()
    }
  }

  // Display upgrade info and allow user to buy it
  return (
    <View style={[styles.upgradeDisplay]}>
      {/* Upgrade name */}
      <Text
        style={[
          styles.upgradeText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        {ascensionUpgrade.name}
        {ascensionUpgrade.owned ? ' (Owned)' : ''}
      </Text>
      {/* Show buy button and cost if they are not bought */}
      <Text
        style={[
          styles.upgradeText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        {ascensionUpgrade.description}
      </Text>
      {ascensionUpgrade.owned ? (
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
            Cost: {formatNumber(ascensionUpgrade.price)}
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
