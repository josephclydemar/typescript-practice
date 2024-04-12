import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Section from '../components/Section';
import Header from '../components/Header';

export default function HomeScreen() {
    return (
        <View
            style={{
                height: 589,
                backgroundColor: '#fff',
            }}>
            <Section title="Live Video">
                <View>
                    <Text>Hello</Text>
                </View>
            </Section>
        </View>
    );
}
