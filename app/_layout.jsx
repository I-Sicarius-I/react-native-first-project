// import { Slot } from 'expo-router'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: {backgroundColor: '#ddd'},
        headerTintColor: '#333',
    }} style={{flex: 1}}>
      {/* <Slot /> <- gives slot for a page, <Stack/> is practically the same, but provides a navigation behavior*/}
      <Stack.Screen name="index" options={{title: 'Home'}}/> {/*Configuration component */}
      <Stack.Screen name="about" options={{title: 'About'}}/>
      <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})