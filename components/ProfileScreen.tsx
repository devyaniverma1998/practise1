// screens/ProfileScreen.js
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import ProfileInfo from '../components/ProfileInfo';
import Footer from '../components/Footer';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <ProfileInfo />
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