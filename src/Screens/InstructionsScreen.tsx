import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { colors } from "../Style/Colors";
import { styles } from "../Style/Styles";
import { ScreenProps } from "../Types/ScreenProps";

export default function InstructionsScreen({ navigation, route }: ScreenProps) {
    const isDarkMode = true;
    
    return (
        <SafeAreaView style={styles.container}>
            {/* Allow scrolling */}
            <ScrollView 
                style={[
                styles.scrollView,
                {
                    backgroundColor: isDarkMode ? colors.background.dark: colors.background.light,
                }
            ]}>
                {/* Text for instructions */}
                <Text  style={[
                    styles.instructionsBody,
                    {
                        color: isDarkMode ? colors.text.dark : colors.text.light,
                    },
                ]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tellus porttitor, fringilla lacus congue, maximus augue. Vestibulum maximus, mauris nec euismod porttitor, nisi erat lobortis orci, id euismod elit turpis mattis metus. Nam nibh ipsum, pulvinar nec dolor et, malesuada laoreet erat. Aenean nec lectus quis risus rhoncus mattis. Proin blandit fermentum elit at porttitor. Nunc dolor justo, dapibus vel est at, pretium cursus enim. Curabitur et lacus vitae elit dapibus lacinia quis ut ex. Phasellus non bibendum velit. Proin vehicula eros nec elit tincidunt ultricies. Sed vestibulum sed dolor et suscipit. In dignissim enim eu risus tristique convallis. Vestibulum cursus sem eu mi rutrum fermentum. Cras eros ex, imperdiet pretium eros porta, posuere laoreet magna.
                </Text>
                <Text  style={[
                    styles.instructionsBody,
                    {
                        color: isDarkMode ? colors.text.dark : colors.text.light,
                    },
                ]}>
                    Proin tincidunt maximus felis at egestas. Ut tempor nec tortor vitae viverra. Mauris aliquet felis ligula, ac auctor urna pharetra id. Pellentesque eu pellentesque elit. Proin purus augue, pretium vitae quam sed, condimentum lobortis sem. Curabitur ut pulvinar lectus, aliquam vulputate mauris. Ut et vehicula orci, sed ullamcorper leo. Aenean sapien felis, viverra sed eros dignissim, feugiat vulputate urna. Etiam nec dui nibh. Praesent tincidunt ex lorem, quis convallis risus faucibus eget.
                </Text>
                <Text  style={[
                    styles.instructionsBody,
                    {
                        color: isDarkMode ? colors.text.dark : colors.text.light,
                    },
                ]}>
                    Ut suscipit varius sapien vel sollicitudin. Phasellus fringilla magna sed nibh convallis tempus. Vivamus ultrices quis urna id hendrerit. Praesent sit amet ullamcorper arcu. Vivamus pretium purus ac diam porta consectetur. Fusce in commodo lorem, eu luctus libero. Nunc nec semper lorem, et cursus tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vestibulum, nisl non ultrices finibus, velit lorem consequat dolor, ut varius turpis justo id felis. In aliquam justo pulvinar ullamcorper dignissim. Curabitur ullamcorper, diam tempor scelerisque pharetra, metus justo pellentesque eros, eget sollicitudin nisl sem non nulla. In non pharetra tellus. Integer lacinia sem augue, mollis tincidunt ipsum mollis sed.
                </Text>
                <Text  style={[
                    styles.instructionsBody,
                    {
                        color: isDarkMode ? colors.text.dark : colors.text.light,
                    },
                ]}>
                    Ut suscipit varius sapien vel sollicitudin. Phasellus fringilla magna sed nibh convallis tempus. Vivamus ultrices quis urna id hendrerit. Praesent sit amet ullamcorper arcu. Vivamus pretium purus ac diam porta consectetur. Fusce in commodo lorem, eu luctus libero. Nunc nec semper lorem, et cursus tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vestibulum, nisl non ultrices finibus, velit lorem consequat dolor, ut varius turpis justo id felis. In aliquam justo pulvinar ullamcorper dignissim. Curabitur ullamcorper, diam tempor scelerisque pharetra, metus justo pellentesque eros, eget sollicitudin nisl sem non nulla. In non pharetra tellus. Integer lacinia sem augue, mollis tincidunt ipsum mollis sed.
                </Text>
                <Text  style={[
                    styles.instructionsBody,
                    {
                        color: isDarkMode ? colors.text.dark : colors.text.light,
                    },
                ]}>
                    Ut suscipit varius sapien vel sollicitudin. Phasellus fringilla magna sed nibh convallis tempus. Vivamus ultrices quis urna id hendrerit. Praesent sit amet ullamcorper arcu. Vivamus pretium purus ac diam porta consectetur. Fusce in commodo lorem, eu luctus libero. Nunc nec semper lorem, et cursus tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vestibulum, nisl non ultrices finibus, velit lorem consequat dolor, ut varius turpis justo id felis. In aliquam justo pulvinar ullamcorper dignissim. Curabitur ullamcorper, diam tempor scelerisque pharetra, metus justo pellentesque eros, eget sollicitudin nisl sem non nulla. In non pharetra tellus. Integer lacinia sem augue, mollis tincidunt ipsum mollis sed.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}