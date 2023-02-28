import { Button, Text, View } from 'react-native'

import { ScreenProps } from '../Types/ScreenProps'

import { colors } from '../Style/Colors'
import { styles } from '../Style/Styles'

import { DarkModeContext } from '../Context/DarkModeContext'
import { useContext } from 'react'

export default function HomeScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)

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
      {/* Title Text */}
      <Text
        style={[
          styles.gameTitle,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        Game Title
      </Text>

      {/* Container for buttons */}
      <View style={styles.buttons}>
        {/* Play button */}
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="Play"
          onPress={_ => navigation.push('Game')}
        />
        {/* Instructions button */}
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="Instructions"
          onPress={_ => navigation.push('Instructions')}
        />
        {/* Options button */}
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="Options"
          onPress={_ => navigation.push('Options')}
        />
      </View>
    </View>
  )
}
