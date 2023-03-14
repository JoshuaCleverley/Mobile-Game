import { View } from 'react-native'
import { colors } from '../../Style/Colors'
import { styles } from '../../Style/Styles'
import { ScreenProps } from '../../Types/ScreenProps'
import { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { MoneyDisplay } from '../../Components/MoneyDisplay'
import { GameContext } from '../../Contexts/GameContext'

export default function UpgradesScreen({ navigation, route }: ScreenProps) {
  const { isDarkMode } = useContext(DarkModeContext)
  const { money, upgrades, setMoney, setUpgrades } = useContext(GameContext)

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
    </View>
  )
}
