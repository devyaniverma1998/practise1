// screens/TVShowsScreen.js
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import TVShowList from '../components/TVShowList';
import Footer from '../components/Footer';

export default function TVShowsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <TVShowList />
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