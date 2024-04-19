import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../style/home/HomeStyles';
import {useGetCurrentWeatherDataQuery} from '../redux/store/api/WeatherApi';

export default function Home() {
  const navigation = useNavigation();
  const {data, error, isLoading} = useGetCurrentWeatherDataQuery('california');
  const fahrenheitToCelsius = fahrenheit => {
    return (fahrenheit - 32) * (5 / 9);
  };

  useEffect(() => {
    if (data) {
      console.log('Weather data:', data);
    } else if (error) {
      console.log('Error fetching data:', error);
    }
  }, [data, error]);

  const renderWeatherItem = ({item}) => {
    const celsiusTemp = fahrenheitToCelsius(item.main.temp);

    return (
      <View style={styles.weatherItem}>
        <Text style={styles.weatherTitle}>Weather Forecast</Text>
        <Text style={styles.weatherLocation}>Location: {item.name}</Text>
        <Text>Temperature: {celsiusTemp.toFixed(2)} °C</Text>
        <Text>Description: {item.weather[0].description}</Text>
        <Text>Humidity: {item.main.humidity} %</Text>
        <Text>Wind Speed: {item.wind.speed} m/s</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon
              name="chevron-left"
              size={40}
              color="white"
              style={styles.backButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>App Weather</Text>
        </View>
      </View>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data ? [data] : []}
          renderItem={renderWeatherItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </SafeAreaView>
  );
}
