// components/Features.js
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const movies = [
  { id: '1', uri: 'https://via.placeholder.com/150x200?text=Movie+1' },
  { id: '2', uri: 'https://via.placeholder.com/150x200?text=Movie+2' },
  { id: '3', uri: 'https://via.placeholder.com/150x200?text=Movie+3' },
];

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Movies</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movie}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movie: {
    marginRight: 10,
  },
  thumbnail: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
});