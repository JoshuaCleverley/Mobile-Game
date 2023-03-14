import { Button, ScrollView, Text, View } from 'react-native'
import { colors } from '../../Style/Colors'
import { styles } from '../../Style/Styles'
import { ScreenProps } from '../../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { GameContext } from '../../Contexts/GameContext'

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
      <View style={[styles.moneyDisplay]}>
        <View style={[styles.menu]}>
          <Button
            title="Upgrades"
            color={isDarkMode ? colors.active.dark : colors.active.light}
            onPress={_ => navigation.push('Upgrades')}
          />
          <Button
            title="Ascension"
            color={isDarkMode ? colors.active.dark : colors.active.light}
            onPress={_ => navigation.push('Ascension')}
          />
        </View>
        <Text
          style={[
            styles.moneyDisplayText,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Money: {money}
        </Text>
        <Text
          style={[
            styles.moneyDisplayText,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Money/s: {0 /* TODO: Calculate money per second*/}
        </Text>
      </View>
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
