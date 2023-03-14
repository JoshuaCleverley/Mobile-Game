import { Button, Text, View } from 'react-native'
import { styles } from '../Style/Styles'
import { colors } from '../Style/Colors'
import { useRoute } from '@react-navigation/native'

export function MoneyDisplay({
  isDarkMode,
  money,
  navigation,
}: {
  isDarkMode: boolean
  money: number
  navigation: any
}) {
  const route = useRoute()

  return (
    <View style={[styles.moneyDisplay]}>
      <View style={[styles.menu]}>
        <Button
          title={route.name == 'Upgrades' ? 'Back' : 'Upgrades'}
          color={isDarkMode ? colors.active.dark : colors.active.light}
          onPress={_ => {
            const location = route.name == 'Upgrades' ? 'Game' : 'Upgrades'
            navigation.push(location)
          }}
        />
        <Button
          title={route.name == 'Ascension' ? 'Back' : 'Ascension'}
          color={isDarkMode ? colors.active.dark : colors.active.light}
          onPress={_ => {
            const location = route.name == 'Ascension' ? 'Game' : 'Ascension'
            navigation.push(location)
          }}
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
  )
}
