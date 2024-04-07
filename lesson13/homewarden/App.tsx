/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, FlatList, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={styles.backgroundStyle.backgroundColor} />
            <HomeScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: Colors.lighter,
    },
});

export default App;
