import { View } from "react-native";
import { colors } from "../../Style/Colors";
import { styles } from "../../Style/Styles";
import { ScreenProps } from "../../Types/ScreenProps";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function AscensionScreen({ navigation, route }: ScreenProps) {
    const { isDarkMode } = useContext(DarkModeContext);
    
    return (
        <View 
            style={[
            styles.container,
            {
                backgroundColor: isDarkMode ? colors.background.dark: colors.background.light,
            }
        ]}>
        </View>
    );
}