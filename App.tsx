// Core imports
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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
import { generators } from './src/GameData/Generators'
import { upgrades } from './src/GameData/Upgrades'
import { ascensionUpgrades } from './src/GameData/AscensionUpgrades'

// Createa a stack navigator to allow navigation around application
const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  // Dark mode state stored here and passed down to other components
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Game data state stored here and passed down to other components
  const [money, setMoney] = useState(0)
  const [ascensionCurrency, setAscensionCurrency] = useState(0)
  const [generatorsValue, setGenerators] = useState(generators)
  const [upgradesValue, setUpgrades] = useState(upgrades)
  const [ascensionUpgradesValue, setAscensionUpgrades] =
    useState(ascensionUpgrades)

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
