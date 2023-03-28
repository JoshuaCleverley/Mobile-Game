import { Button, ScrollView, Text, View } from 'react-native'
import { colors } from '../../Style/Colors'
import { styles } from '../../Style/Styles'
import { ScreenProps } from '../../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { GameContext } from '../../Contexts/GameContext'
import { MoneyDisplay } from '../../Components/MoneyDisplay'
import { GeneratorDisplay } from '../../Components/GeneratorDisplay'

export default function MainGameScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)
  const { money, generators, upgrades, setMoney, calculateIncome } =
    useContext(GameContext)

  const clickMoneyButton = () => {
    let clickMoney = 10

    upgrades.forEach(upgrade => {
      if (upgrade.owned && upgrade.click) {
        clickMoney *= upgrade.moneyMultiplier
      }
    })

    setMoney(money + clickMoney)
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
      <MoneyDisplay
        money={money}
        income={calculateIncome()}
        isDarkMode={isDarkMode}
        navigation={navigation}
      />
      <Button
        color={isDarkMode ? colors.active.dark : colors.active.light}
        title="Click to generate money"
        onPress={clickMoneyButton}
      />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {/* Display generators */}
        {generators.map(generator => {
          return (
            <GeneratorDisplay
              key={generator.name}
              isDarkMode={isDarkMode}
              generator={generator}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}
