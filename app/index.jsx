import { StyleSheet, Text} from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo/>
      <Spacer height={20}/>

      <ThemedText title={true} style={styles.title}>The Number 1</ThemedText>
      
      <Spacer height={10}/>
      <ThemedText> Reading List App </ThemedText>
      <Spacer/>
      
      <ThemedCard>
        <ThemedText>Hello, this is a card.</ThemedText>
      </ThemedCard>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18
    },
    card: {
      backgroundColor: '#eee',
      padding: 20,
      marginBottom: 15,
      borderRadius: 5,
      boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})

