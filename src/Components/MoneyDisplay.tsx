import { Button, Text, View } from 'react-native'
import { styles } from '../Style/Styles'
import { colors } from '../Style/Colors'
import { useRoute } from '@react-navigation/native'
import { formatCurrency } from '../Utils/Formatting'

export function MoneyDisplay({
  isDarkMode,
  money,
  income,
  navigation,
}: {
  isDarkMode: boolean
  money: number
  income: number
  navigation: any
}) {
  const route = useRoute()

  return (
    <View style={[styles.moneyDisplay]}>
      <View style={[styles.menu]}>
        {/* Navigation menu */}
        <Button
          title={route.name == 'Upgrades' ? 'Back' : 'Upgrades'}
          color={isDarkMode ? colors.active.dark : colors.active.light}
          onPress={_ => {
            const location = route.name == 'Upgrades' ? 'Game' : 'Upgrades'
            if (location == 'Game') navigation.pop()
            navigation.push(location)
          }}
        />
        <Button
          title={route.name == 'Ascension' ? 'Back' : 'Ascension'}
          color={isDarkMode ? colors.active.dark : colors.active.light}
          onPress={_ => {
            const location = route.name == 'Ascension' ? 'Game' : 'Ascension'
            if (location == 'Game') navigation.pop()
            navigation.push(location)
          }}
        />
      </View>
      {/* Money display */}
      <Text
        style={[
          styles.moneyDisplayText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        Money: {formatCurrency(money)}
      </Text>
      {/* Income display */}
      <Text
        style={[
          styles.moneyDisplayText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        Money/s: {formatCurrency(income)}
      </Text>
    </View>
  )
}
