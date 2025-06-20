// components/MovieGrid.js
import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY')
      .then((response) =>
        setMovies(
          response.data.results.map((movie: { id: { toString: () => any; }; poster_path: any; }) => ({
            id: movie.id.toString(),
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Rated Movies</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movie}>
            <Image source={{ uri: item.uri() }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
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
    flex: 1,
    margin: 5,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 5,
  },
});