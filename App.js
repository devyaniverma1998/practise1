// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabsNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/(tabs)/index';
import TVShowsScreen from './components/TVShowsScreen';
import MoviesScreen from './components/MoviesScreen';
import MyListScreen from './components/MyListScreen';
import SearchScreen from './components/SearchScreen';
import ProfileScreen from './components/ProfileScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabsNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#E50914',
          tabBarInactiveTintColor: '#FFF',
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="TV Shows" component={TVShowsScreen} />
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="My List" component={MyListScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#141414',
    borderTopColor: '#333',
  },
});