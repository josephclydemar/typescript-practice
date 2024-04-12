/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import NavigationBar from './components/NavigationBar';

import HomeScreen from './screens/HomeScreen';
import DailyRecordsScreen from './screens/DailyRecordsScreen';
import AuthorizedUsersScreen from './screens/AuthorizedUsersScreen';

import { CurrentScreen } from './types/ScreensTypes';

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('home-screen');
    const [currentScreenComponent, setCurrentScreenComponent] = useState<JSX.Element>(<HomeScreen />);

    useEffect(
        function () {
            switch (currentScreen) {
                case 'home-screen':
                    setCurrentScreenComponent(<HomeScreen />);
                    break;
                case 'daily-records-screen':
                    setCurrentScreenComponent(<DailyRecordsScreen />);
                    break;
                case 'authorized-users-screen':
                    setCurrentScreenComponent(<AuthorizedUsersScreen />);
                    break;
            }
        },
        [currentScreen],
    );

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={styles.backgroundStyle.backgroundColor} />
            {currentScreenComponent}
            <View>
                <NavigationBar setCurrentScreen={setCurrentScreen} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.lighter,
    },
});

export default App;
