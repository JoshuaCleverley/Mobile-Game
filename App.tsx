// Core imports
import { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Colour
import { colors } from './src/Style/Colors'

// Screens
import HomeScreen from './src/Screens/HomeScreen'
import InstructionsScreen from './src/Screens/InstructionsScreen'
import OptionsScreen from './src/Screens/OptionsScreen'
import AscensionScreen from './src/Screens/Game/AscensionScreen'
import MainGameScreen from './src/Screens/Game/MainGameScreen'
import UpgradesScreen from './src/Screens/Game/UpgradesScreen'

// Contexts
import { DarkModeContext } from './src/Contexts/DarkModeContext'
import { GameContext } from './src/Contexts/GameContext'

// Game data
import { Generator, generators } from './src/GameData/Generators'
import { Upgrade, upgrades } from './src/GameData/Upgrades'
import { ascensionUpgrades } from './src/GameData/AscensionUpgrades'
import { GameDataStored } from './src/Types/GameDataStored'

// Create a stack navigator to allow navigation around application
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  // Dark mode state stored here and passed down to other components
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Game data state stored here and passed down to other components
  const [money, setMoney] = useState(0)
  const [ascensionCurrency, setAscensionCurrency] = useState(0)
  const [generatorsValue, setGenerators] = useState(
    JSON.parse(JSON.stringify(generators)) as Generator[]
  )
  const [upgradesValue, setUpgrades] = useState(
    JSON.parse(JSON.stringify(upgrades)) as Upgrade[]
  )
  const [ascensionUpgradesValue, setAscensionUpgrades] =
    useState(ascensionUpgrades)

  // TODO: Get saving working
  /*
  useEffect(() => {
    // On startup, check if data is saved already and load it if it is
    AsyncStorage.getItem('gameData')
      .then(res => {
        if (res) {
          const gameData = JSON.parse(res) as GameDataStored

          setMoney(gameData.money)
          setAscensionCurrency(gameData.ascensionCurrency)
          setGenerators(gameData.generators)
          setUpgrades(gameData.upgrades)
          setAscensionUpgrades(gameData.ascensionUpgrades)
        }

        console.log('Successfully loaded game data')
      })
      .catch(e => {
        console.error('Error loading game data:\n' + e)
      })
  }, [])
  */

  // Save game every 20 seconds
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Saving game')

      const gameData: GameDataStored = {
        money: money,
        ascensionCurrency: ascensionCurrency,
        generators: generatorsValue,
        upgrades: upgradesValue,
        ascensionUpgrades: ascensionUpgradesValue,
      }

      const gameDataStringified = JSON.stringify(gameData)

      AsyncStorage.setItem('gameData', gameDataStringified)
        .then(res => {
          console.log('Successfully stored game data')
        })
        .catch(e => {
          console.error('Error storing game data')
        })
    }, 20000)

    return () => clearInterval(interval)
  }, [])
  */

  useEffect(() => {
    // Add income to money twice a second
    const delay = 500
    const interval = setInterval(() => {
      const income = calculateIncome() * (delay / 1000)
      setMoney(money => money + income)
    }, delay)

    return () => clearInterval(interval)
  }, [upgradesValue, generatorsValue])

  const calculateIncome = (): number => {
    // Calculate income based on generators
    let income = 0

    generatorsValue.forEach((generator, index) => {
      let generatorIncome = generator.count * generator.generates
      income += generatorIncome
      upgradesValue.forEach(upgrade => {
        if (upgrade.owned) {
          if (!upgrade.click) {
            if (
              upgrade.generators.includes(index) ||
              upgrade.generators.length == 0
            ) {
              generatorIncome *= upgrade.moneyMultiplier
            }
          }
        }
      })
      income += generatorIncome
    })

    return income
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {/* Providers for darkmode and game data */}
      <GameContext.Provider
        value={{
          money,
          ascensionCurrency,
          generators: generatorsValue,
          upgrades: upgradesValue,
          ascensionUpgrades: ascensionUpgradesValue,
          setMoney,
          setAscensionCurrency,
          setGenerators,
          setUpgrades,
          setAscensionUpgrades,
          calculateIncome,
        }}>
        <NavigationContainer>
          {/* Style statusbar with the background colour */}
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={
              isDarkMode ? colors.background.dark : colors.background.light
            }
          />
          {/* Create navigator and style header */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTintColor: isDarkMode
                ? colors.text.dark
                : colors.text.light,
              headerStyle: {
                backgroundColor: isDarkMode
                  ? colors.background.dark
                  : colors.background.light,
              },
            }}>
            {/* Screens of app */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Instructions" component={InstructionsScreen} />
            <Stack.Screen name="Options" component={OptionsScreen} />
            <Stack.Screen name="Game" component={MainGameScreen} />
            <Stack.Screen name="Upgrades" component={UpgradesScreen} />
            <Stack.Screen name="Ascension" component={AscensionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GameContext.Provider>
    </DarkModeContext.Provider>
  )
}

export default App
