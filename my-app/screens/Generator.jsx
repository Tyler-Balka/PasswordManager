import { StyleSheet, Text, View } from 'react-native';

export default function Generator() {
  return (
    <View style={styles.container}>
      <Text>Generator Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});