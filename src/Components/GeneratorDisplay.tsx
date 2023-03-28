import { View, Text, Button } from 'react-native'
import { Generator } from '../GameData/Generators'
import { styles } from '../Style/Styles'
import { colors } from '../Style/Colors'
import { useForceUpdate } from '../hooks/UseForceUpdate'
import { GameContext } from '../Contexts/GameContext'
import { useContext } from 'react'
import { formatCurrency } from '../Utils/Formatting'

type Props = {
  generator: Generator
  isDarkMode: boolean
}

export function GeneratorDisplay({ generator, isDarkMode }: Props) {
  let forceUpdate = useForceUpdate()
  let { money, generators, setMoney, setGenerators } = useContext(GameContext)

  const Buy = (value?: number) => {
    // Buy a specific number of generators, or as many as possible

    // TODO: Calculate cost properly, using number of generators to scale it
    if (value) {
      // Buy a specific number of generators
      const cost = generator.price * value

      if (cost <= money) {
        let gens = generators
        gens[generator.id].count += value
        setGenerators(gens)
        setMoney(money - cost)
        forceUpdate()
      }
    } else {
      // Buy as many generators as possible
      const cost = generator.price

      const max = Math.floor(money / cost)
      const gens = generators
      gens[generator.id].count += max
      setGenerators(gens)
      setMoney(money - cost * max)
      forceUpdate()
    }
  }

  return (
    <View style={[styles.generatorDisplay]}>
      {/* Display generator name and generator count */}
      <Text
        style={[
          styles.generatorText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        {generator.name} x{generator.count}
      </Text>
      {/* Display generator cost */}
      <Text
        style={[
          styles.generatorText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        Cost: {formatCurrency(generator.price)}
      </Text>
      {/* Display generator production rate */}
      <Text
        style={[
          styles.generatorText,
          {
            color: isDarkMode ? colors.text.dark : colors.text.light,
          },
        ]}>
        Produces {formatCurrency(generator.generates)} money/s
      </Text>
      {/* Buttons to buy generator */}
      <View style={[styles.generatorButtonContainer]}>
        <Text
          style={[
            styles.generatorText,
            {
              color: isDarkMode ? colors.text.dark : colors.text.light,
            },
          ]}>
          Buy:
        </Text>
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="One"
          onPress={() => {
            Buy(1)
          }}
        />
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="Ten"
          onPress={() => {
            Buy(10)
          }}
        />
        <Button
          color={isDarkMode ? colors.active.dark : colors.active.light}
          title="All"
          onPress={() => {
            Buy()
          }}
        />
      </View>
    </View>
  )
}
