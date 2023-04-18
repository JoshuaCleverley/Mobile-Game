import { Button, ScrollView, Text, View } from 'react-native'
import { colors } from '../../Style/Colors'
import { styles } from '../../Style/Styles'
import { ScreenProps } from '../../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { GameContext } from '../../Contexts/GameContext'
import { generators as gens } from '../../GameData/Generators'
import { upgrades } from '../../GameData/Upgrades'
import { formatNumber } from '../../Utils/Formatting'
import { AscensionUpgradesDisplay } from '../../Components/AscensionUpgradesDisplay'

export default function AscensionScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)
  const {
    generators,
    ascensionCurrency,
    ascensionUpgrades,
    setAscensionCurrency,
    setAscensionUpgrades,
    setGenerators,
    setMoney,
    setUpgrades,
  } = useContext(GameContext)

  const Ascend = () => {
    // Calculate ascension points to be gained based on cost of all generators purchased
    // This will be used to unlock ascension upgrades
    // NOTE: This is temporary, will be changed to a more complex formula later based on
    //       data such as total money gained, total income, etc.
    // The current formula is: (total cost of all generators) / 1000
    let ascensionCurrencyGained = 0

    for (let i = 0; i < generators.length; i++) {
      ascensionCurrencyGained +=
        (generators[i].count * generators[i].price) / 1000
    }

    setAscensionCurrency(ascensionCurrency + ascensionCurrencyGained)

    // Reset everything except ascension points and upgrades
    setGenerators([...gens])
    setMoney(0)
    setUpgrades([...upgrades])

    // Send user back to main game page
    navigation.pop()
    navigation.push('Game')
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? colors.background.dark
            : colors.background.light,
        },
      ]}>
      <View>
        {/* Ascension currency display */}
        <Text
          style={[
            styles.upgradeText,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Ascension Currency: {formatNumber(ascensionCurrency)}
        </Text>
        {/* Ascend button */}
        <Button
          title="Ascend"
          onPress={Ascend}
          color={isDarkMode ? colors.active.dark : colors.active.light}
        />
      </View>
      <ScrollView>
        {/* Display upgrades */}
        {ascensionUpgrades.map(ascensionUpgrade => {
          return (
            <AscensionUpgradesDisplay
              key={ascensionUpgrade.id}
              isDarkMode={isDarkMode}
              ascensionUpgrade={ascensionUpgrade}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
