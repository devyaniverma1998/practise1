// components/Navbar.js
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' }}
        style={styles.logo}
      />
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Placeholder profile icon
          style={styles.profile}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#141414',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});