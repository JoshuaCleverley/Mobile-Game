import { useContext, useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { colors } from '../Style/Colors'
import { styles } from '../Style/Styles'
import { ScreenProps } from '../Types/ScreenProps'

import { DarkModeContext } from '../Context/DarkModeContext'

export default function OptionsScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)
  const toggleSwitch = () => setIsDarkMode(!isDarkMode)

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
      <Text
        style={{ color: isDarkMode ? colors.text.dark : colors.text.light }}>
        Light/Dark mode
      </Text>
      <Switch
        trackColor={{ true: colors.active.dark, false: colors.active.light }}
        thumbColor={isDarkMode ? colors.active.dark : colors.active.light}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  )
}
