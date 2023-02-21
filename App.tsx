// Imports
import { useState } from 'react';
import {
    StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { colors } from './src/Style/Colors';

import HomeScreen from './src/Screens/HomeScreen';
import InstructionsScreen from './src/Screens/InstructionsScreen';
import OptionsScreen from './src/Screens/OptionsScreen';
import AscensionScreen from './src/Screens/Game/AscensionScreen';
import MainGameScreen from './src/Screens/Game/MainGameScreen';
import UpgradesScreen from './src/Screens/Game/UpgradesScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    // TODO: Setup dark mode to be saveable and global, and allow it to be changed in the settings page
    const [isDarkMode, setDarkMode] = useState(true);

    return (
        <NavigationContainer>
            
                {/* Style statusbar with the background colour */}
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkMode ? colors.background.dark : colors.background.light}
                />

                {/* Screens of app */}
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen  
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen  
                        name="Instructions"
                        component={InstructionsScreen}
                    />
                    <Stack.Screen  
                        name="Options"
                        component={OptionsScreen}
                    />
                    <Stack.Screen  
                        name="Game"
                        component={MainGameScreen}
                    />
                    <Stack.Screen  
                        name="Upgrades"
                        component={UpgradesScreen}
                    />
                    <Stack.Screen  
                        name="Ascension"
                        component={AscensionScreen}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
