import { useContext, useState } from 'react'
import { Alert, Button, Switch, Text, View } from 'react-native'
import { colors } from '../Style/Colors'
import { styles } from '../Style/Styles'
import { ScreenProps } from '../Types/ScreenProps'

import { DarkModeContext } from '../Contexts/DarkModeContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GameContext } from '../Contexts/GameContext'
import { ascensionUpgrades } from '../GameData/AscensionUpgrades'
import { upgrades } from '../GameData/Upgrades'
import { generators } from '../GameData/Generators'

export default function OptionsScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)
  const {
    setMoney,
    setUpgrades,
    setGenerators,
    setAscensionCurrency,
    setAscensionUpgrades,
  } = useContext(GameContext)

  const toggleSwitch = () => setIsDarkMode(!isDarkMode)

  const clearData = () => {
    Alert.alert(
      'Confirm delete',
      'Please confirm you want to delete your saved data',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => AsyncStorage.removeItem('@gameData'),
        },
      ]
    )

    setMoney(0)
    setAscensionCurrency(0)
    setGenerators([...generators])
    setUpgrades([...upgrades])
    setAscensionUpgrades([...ascensionUpgrades])
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
      {/* Text for switch */}
      <Text
        style={{ color: isDarkMode ? colors.text.dark : colors.text.light }}>
        Light/Dark mode
      </Text>
      {/* Darkmode toggle switch */}
      <Switch
        trackColor={{ true: colors.active.dark, false: colors.active.light }}
        thumbColor={isDarkMode ? colors.active.dark : colors.active.light}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
      {/* Button to clear saved data */}
      <Button title="Clear saved data" onPress={clearData} />
    </View>
  )
}
