import { StyleSheet, Text, View, Pressable } from "react-native"
import { Link } from 'expo-router'

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the Register page of your app.</Text>
        <Link href='/(app)' asChild>
          <Pressable style={styles.button}>
          <Text style={{color: 'white'}}>Go Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center'
  }
});
