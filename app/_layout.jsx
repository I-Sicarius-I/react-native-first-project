import { Stack } from 'expo-router'
import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';
import { UserProvider } from '../contexts/UserContext';

const RootLayout = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; //null coalescence



    return (
        <UserProvider>
            <StatusBar value="auto"/>
            <Stack screenOptions={{
                headerStyle: {backgroundColor: theme.navBackground},
                headerTintColor: theme.title,
            }} style={{flex: 1}}>
                {/* <Slot /> <- gives slot for a page, <Stack/> is practically the same, but provides a navigation behavior*/}
                <Stack.Screen name="index" options={{title: 'Home'}}/> {/*Configuration component */}
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(dashboard)" options={{headerShown: false}}/>

                <Stack.Screen name="about" options={{title: 'About'}}/>
                <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false}}/>
            </Stack>
        </UserProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({})