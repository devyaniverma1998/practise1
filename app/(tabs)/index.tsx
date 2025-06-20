// screens/HomeScreen.js
import { ScrollView, StyleSheet, View } from 'react-native';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <HeroSection />
        <Features />
        <CallToAction />
        <Testimonials />
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