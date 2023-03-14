import { Button, ScrollView, Text, View } from 'react-native'
import { colors } from '../../Style/Colors'
import { styles } from '../../Style/Styles'
import { ScreenProps } from '../../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { GameContext } from '../../Contexts/GameContext'
import { MoneyDisplay } from '../../Components/MoneyDisplay'

export default function MainGameScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)
  const { money, generators, setMoney, setGenerators } = useContext(GameContext)

  const clickMoneyButton = () => {
    let newMoney = money

    // TODO: Calculate how much money should be generated based on upgrades
    newMoney += 1

    setMoney(newMoney)
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
        isDarkMode={isDarkMode}
        navigation={navigation}
      />
      <Button
        color={isDarkMode ? colors.active.dark : colors.active.light}
        title="Click to generate money"
        onPress={clickMoneyButton}
      />
      <ScrollView>
        {/* Display generators */}
        {generators.map(generator => {
          return <Text key={generator.name}>{generator.name}</Text>
        })}
      </ScrollView>
    </View>
  )
}
