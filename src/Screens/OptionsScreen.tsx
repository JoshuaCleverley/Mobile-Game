import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { colors } from "../Style/Colors";
import { styles } from "../Style/Styles";
import { ScreenProps } from "../Types/ScreenProps";

export default function OptionsScreen({ navigation, route }: ScreenProps) {
    const isDarkMode = true;

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View 
            style={[
            styles.container,
            {
                backgroundColor: isEnabled ? colors.background.dark: colors.background.light,
            }
        ]}>
            <Text style={{ color: isEnabled ? colors.text.dark : colors.text.light }}>
                Light/Dark mode
            </Text>
            <Switch
                trackColor={{true: colors.active.dark, false: colors.active.light}}
                thumbColor={isEnabled ? colors.active.dark : colors.active.light}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}