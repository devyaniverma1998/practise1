// screens/MoviesScreen.js
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';

export default function MoviesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <MovieGrid />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});