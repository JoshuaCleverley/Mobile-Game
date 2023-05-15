import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { colors } from '../Style/Colors'
import { styles } from '../Style/Styles'
import { ScreenProps } from '../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../Contexts/DarkModeContext'

export default function InstructionsScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <SafeAreaView style={styles.container}>
      {/* Allow scrolling */}
      <ScrollView
        style={[
          styles.scrollView,
          {
            backgroundColor: isDarkMode
              ? colors.background.dark
              : colors.background.light,
          },
        ]}>
        {/* Text for instructions (WIP) */}
        <Text
          style={[
            styles.instructionsBody,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Press Play to start playing!
        </Text>
        <Text
          style={[
            styles.instructionsBody,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          You can click the button to generate money. This money can be used to
          buy "Generators" and "Upgrades". Generators generate money
          automatically, and Upgrades increase the amount of money you get per
          click or how much money generators produce.
        </Text>
        <Text
          style={[
            styles.instructionsBody,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Once you have bought a lot of generators, check out "Ascension".
          Ascension resets your game, but you get a multiplier to your money
          made. Ascension currency can also be used to buy "Ascension Upgrades"
          which are permanent upgrades that make the game easier.
        </Text>
        <Text
          style={[
            styles.instructionsBody,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          The goal of the game is to generate as much money as you can!
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}
