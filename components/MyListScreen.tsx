// screens/MyListScreen.js
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import MyListCarousel from '../components/MyListCarousel';
import Footer from '../components/Footer';

export default function MyListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <MyListCarousel />
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