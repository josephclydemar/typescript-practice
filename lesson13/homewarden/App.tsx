/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  FlatList,
  View,
  Text,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


import { Presence } from './types/PeoplePresence';

import Section from './components/Section';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [presences, setPresences] = useState<Presence[]>([
    { time: '12:44AM', day: 'MON' },
    { time: '04:22AM', day: 'FRI' },
    { time: '02:51PM', day: 'THU' },
  ]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header title='Home Warden'/>
      <Section title='People Presence'>
        <FlatList
          data={presences}
          renderItem={function ({ item }) {
            return <View style={{
              margin: 5,
            }}>
              <Text>DAY: {item.day }</Text>
              <Text>TIME: {item.time}</Text>
            </View>
          }} />
      </Section>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
