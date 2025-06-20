// components/Testimonials.js
import { View, Text, StyleSheet } from 'react-native';

export default function Testimonials() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Users Say</Text>
      <Text style={styles.review}>"Amazing content selection!" - User 1</Text>
      <Text style={styles.review}>"Love the interface!" - User 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5,
  },
});