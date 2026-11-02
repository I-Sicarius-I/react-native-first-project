import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors';

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <View 
        style={[{backgroundColor: theme.background,}, style]}
        {...props}
        /> // Manually add children by closing a single tag
    )
}

export default ThemedView

const styles = StyleSheet.create({})