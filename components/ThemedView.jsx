import {StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const ThemedView = ({ style, safe=false, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    if(!safe) return (

        <View
        style={[{backgroundColor: theme.background,}, style]}
        {...props}
        /> // Manually add children by closing a single tag
    )

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
            {
                backgroundColor: theme.background,
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }, 
                style
            ]}
            {...props}
        /> // Manually add children by closing a single tag
    )
}

export default ThemedView

const styles = StyleSheet.create({})