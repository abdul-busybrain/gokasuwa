import { Text, View, StyleSheet } from "react-native";

function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.jsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;
