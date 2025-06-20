// screens/SearchScreen.js
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Footer from './Footer';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <SearchBar />
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