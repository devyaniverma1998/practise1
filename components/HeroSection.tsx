// components/HeroSection.js
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default function HeroSection() {
  return (
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/400x200?text=Featured+Movie' }}
      style={styles.hero}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Featured Movie</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playText}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 300,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: '#E50914',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
  },
  playText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});